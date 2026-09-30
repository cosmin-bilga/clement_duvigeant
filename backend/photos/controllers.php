<?php

declare(strict_types=1);

require_once "../connection.php";
require_once "../jwt.php";

Auth::init();

function add_photo(): void
{

    // AUTHENTICATION
    $userId = null;
    if (isset($_SERVER["HTTP_AUTHORIZATION"]))
        $userId = Auth::validate(explode(" ", $_SERVER["HTTP_AUTHORIZATION"])[1])->sub;

    if (!$userId) {
        http_response_code(401);
        echo json_encode([
            "message" => "You must be logged in"
        ]);
        return;
    }

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
        $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
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

    echo json_encode($res);
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
        if ($file["error"] === 1 || $file["error"] === 2) {
            echo json_encode([
                "message" => "File too big. Try with a smaller file",
            ]);
            return;
        }
        echo json_encode([
            "message" => "Upload failed",
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
        $oldFilename = "";
        if ($res)
            $oldFilename = $res["name"];
        else {
            http_response_code(400);
            echo json_encode([
                "message" => "Photo id does not exist"
            ]);
            return;
        }
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

    if ($oldFilename != "" && file_exists(__DIR__ . "/../uploads/photos/" . $oldFilename)) {
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

    // AUTHENTICATION
    $userId = null;
    if (isset($_SERVER["HTTP_AUTHORIZATION"]))
        $userId = Auth::validate(explode(" ", $_SERVER["HTTP_AUTHORIZATION"])[1])->sub;

    if (!$userId) {
        http_response_code(401);
        echo json_encode([
            "message" => "You must be logged in"
        ]);
        return;
    }

    $conn = Connection::getConnection();

    try {
        $sql = "SELECT * from images WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":id" => $id
        ]);
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        $oldFilename = "";
        if ($res)
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

    if ($oldFilename != "" && file_exists(__DIR__ . "/../uploads/photos/" . $oldFilename)) {
        unlink(__DIR__ . "/../uploads/photos/" . $oldFilename);
    }

    http_response_code(200);

    echo json_encode([
        "message" => "Photo deleted",
    ]);
}
