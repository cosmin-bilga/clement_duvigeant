<?php

/**
 * METHODS: POST, OPTIONS
 * 
 * -- POST: CONNEXION ET RECUPERATION TOKEN ADMIN
 * PARAMS : email, password
 * AUTH: none
 * RETURN: ?admin_token, message
 */

declare(strict_types=1);

require_once "../connection.php";
require_once "../jwt.php";

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}


switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        modify_password($_POST);
        break;
    default:
        echo json_encode(["message" => "Invalid request"]);
        http_response_code(400);
        break;
}

function modify_password(array $requestData): void
{
    Auth::init();

    $dataVerif = verify_data($requestData);

    if ($dataVerif !== []) {
        http_response_code($dataVerif[0]);
        echo json_encode(["message" => $dataVerif[1]]);
        return;
    }

    $userId = Auth::validate(explode(" ", $_SERVER["HTTP_AUTHORIZATION"])[1])->sub;

    $conn = Connection::getConnection();

    try {
        $sql = "SELECT * FROM admins WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":id" => $userId
        ]);
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
    }


    if (!$res) {
        http_response_code(401); // CONNECTION REFUSED
        echo json_encode(["message" => "Login not found"]);
        return;
    }

    if ($res["password"] === "" || password_verify($requestData["password"], $res["password"])) {

        try {
            $sql = "UPDATE admins SET password = :password WHERE id=:id";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ":password" => password_hash($requestData['new_password'], PASSWORD_BCRYPT, ["cost" => 12]),
                ":id" => $userId
            ]);
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            http_response_code(500);
        }

        http_response_code(201);
        echo json_encode(["message" => "Password succesfully changed"]);
        return;
    }
    http_response_code(403); // FORBIDDEN
    echo json_encode(["message" => "Wrong password"]);
}


function verify_data(array $requestData): array
{
    if (!isset($_SERVER["HTTP_AUTHORIZATION"])) {
        return [401, "You must be logged in"];
    }
    if (!isset($requestData["password"])) {
        return [400, "Password required"];
    }
    if (!isset($requestData["new_password"])) {
        return [400, "New password required"];
    }
    if (strlen($requestData["new_password"]) < 6) {
        return [400, "New password is too short (6 characters minimum)"];
    }
    if (!isset($requestData["password_confirm"])) {
        return [400, "Password confirm required"];
    }
    if ($requestData["password_confirm"] !== $requestData["new_password"]) {
        return [400, "New passwords do not match"];
    }
    return [];
}
