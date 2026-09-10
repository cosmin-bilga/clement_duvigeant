<?php

declare(strict_types=1);

require_once "../connection.php";
require_once "../jwt.php";

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {

    case "GET":
        get_photos();
        break;

    case "POST":
        add_photo();
        break;

    case "DELETE":
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data["id"])) {
            http_response_code(400);
            echo json_encode(["message" => "Photo ID required"]);
            return;
        }

        $id = (int) $data["id"];
        delete_photo($id);
        break;

    default:
        http_response_code(405);
        echo json_encode([
            "message" => "Method not allowed"
        ]);
        break;
}

function add_photo(): void
{
    if (isset($_POST["id"])) {
        modify_photo();
        return;
    }


    if (!isset($_FILES["photo"])) {
        http_response_code(400);

        echo json_encode([
            "message" => "Photo required"
        ]);

        return;
    }

    $file = $_FILES["photo"];

    if ($file["error"] !== UPLOAD_ERR_OK) {
        http_response_code(400);

        echo json_encode([
            "message" => "Upload failed"
        ]);

        return;
    }

    // Validate MIME type
    $allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ];

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mimeType = $finfo->file($file["tmp_name"]);

    if (!in_array($mimeType, $allowedTypes, true)) {
        http_response_code(400);

        echo json_encode([
            "message" => "Invalid image type"
        ]);

        return;
    }

    // Generate a safe filename
    $extension = match ($mimeType) {
        "image/jpeg" => "jpg",
        "image/png" => "png",
        "image/webp" => "webp"
    };

    $filename = bin2hex(random_bytes(16)) . "." . $extension;

    $uploadDirectory = __DIR__ . "/../uploads/photos/";

    if (!is_dir($uploadDirectory)) {
        mkdir($uploadDirectory, 0755, true);
    }

    $destination = $uploadDirectory . $filename;

    if (!move_uploaded_file($file["tmp_name"], $destination)) {
        http_response_code(500);

        echo json_encode([
            "message" => "Could not save photo"
        ]);

        return;
    }

    $conn = Connection::getConnection();

    try {
        $sql = "INSERT INTO images (name, location) VALUES (:name, :location)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":name" => $filename,
            ":location" => $_POST["location"]
        ]);
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
        return;
    }

    http_response_code(201);

    echo json_encode([
        "message" => "Photo added",
        "filename" => $filename
    ]);
}

function get_photos(): void
{

    $conn = Connection::getConnection();

    try {
        $sql = "SELECT * FROM images";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
        return;
    }

    if (!$res) {
        http_response_code(401); // CONNECTION REFUSED
        echo json_encode(["message" => "Login not found"]);
        return;
    }

    echo json_encode(["photos" => $res]);
}

function modify_photo(): void
{

    if (isset($_POST["location"]) && $_POST["location"] === "slider") {
        http_response_code(400);
        echo json_encode(["message" => "Cannot replace slider images, use POST or DELETE"]);
    }

    if (!isset($_FILES["photo"])) {
        http_response_code(400);

        echo json_encode([
            "message" => "Photo required"
        ]);

        return;
    }

    $file = $_FILES["photo"];

    if ($file["error"] !== UPLOAD_ERR_OK) {
        http_response_code(400);

        echo json_encode([
            "message" => "Upload failed"
        ]);

        return;
    }

    // Validate MIME type
    $allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ];

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mimeType = $finfo->file($file["tmp_name"]);

    if (!in_array($mimeType, $allowedTypes, true)) {
        http_response_code(400);

        echo json_encode([
            "message" => "Invalid image type"
        ]);

        return;
    }

    // Generate a safe filename
    $extension = match ($mimeType) {
        "image/jpeg" => "jpg",
        "image/png" => "png",
        "image/webp" => "webp"
    };

    $filename = bin2hex(random_bytes(16)) . "." . $extension;

    $uploadDirectory = __DIR__ . "/../uploads/photos/";

    if (!is_dir($uploadDirectory)) {
        mkdir($uploadDirectory, 0755, true);
    }

    $destination = $uploadDirectory . $filename;

    if (!move_uploaded_file($file["tmp_name"], $destination)) {
        http_response_code(500);

        echo json_encode([
            "message" => "Could not save photo"
        ]);

        return;
    }

    $conn = Connection::getConnection();

    try {
        $sql = "SELECT * from images WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":id" => $_POST["id"]
        ]);
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        $oldFilename = $res["name"];
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
        return;
    }


    try {
        $sql = "UPDATE images SET name=:name WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":name" => $filename,
            ":id" => $_POST["id"]
        ]);
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
        return;
    }

    if (file_exists(__DIR__ . "/../uploads/photos/" . $oldFilename)) {
        unlink(__DIR__ . "/../uploads/photos/" . $oldFilename);
    }

    http_response_code(200);

    echo json_encode([
        "message" => "Photo modified",
        "filename" => $filename
    ]);
}

function delete_photo(int $id)
{
    $conn = Connection::getConnection();

    try {
        $sql = "SELECT * from images WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":id" => $id
        ]);
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        $oldFilename = $res["name"];
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
        return;
    }


    try {
        $sql = "DELETE FROM images WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":id" => $id
        ]);
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
        return;
    }

    if (file_exists(__DIR__ . "/../uploads/photos/" . $oldFilename)) {
        unlink(__DIR__ . "/../uploads/photos/" . $oldFilename);
    }

    http_response_code(200);

    echo json_encode([
        "message" => "Photo deleted",
    ]);
}
