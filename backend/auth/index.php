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


switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $requestData = $_POST;
        admin_connect($requestData);
        break;
    default:
        echo json_encode(["message" => "Invalid request"]);
        http_response_code(400);
        break;
}


function admin_connect(array $requestData): void
{
    Auth::init();

    if (!isset($requestData["email"])) {
        http_response_code(400);
        echo json_encode(["message" => "Email required"]);
    }
    if (!isset($requestData["password"])) {
        http_response_code(400);
        echo json_encode(["message" => "Password required"]);
    }

    $conn = Connection::getConnection();

    try {
        $sql = "SELECT * FROM admins WHERE email=:login";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":login" => $requestData["email"]
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

    if ($res["locked_until"] && time() < $res["locked_until"]) {
        http_response_code(401); // CONNECTION REFUSED
        echo json_encode(["message" => "Too many failed attempts. Retry later."]);
        return;
    }

    if (password_verify($requestData["password"], $res["password"])) {

        $token = Auth::generate((int) $res['id']);

        unset($res["password"]);

        http_response_code(202); // ACCEPTED
        echo json_encode(["token" => $token, "message" => "Admin logged in"]);


        try {
            $sql = "UPDATE admins SET failed_attempts=:failed_attempts, locked_until=:locked_until WHERE email=:login";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ":login" => $requestData["email"],
                ":failed_attempts" => 0,
                ":locked_until" => null,
            ]);
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            http_response_code(500);
        }
        return;
    } else {

        try {
            $sql = "UPDATE admins SET failed_attempts=:failed_attempts, locked_until=:locked_until WHERE email=:login";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ":login" => $requestData["email"],
                ":failed_attempts" => $res['failed_attempts'] + 1,
                ":locked_until" => $res['failed_attempts'] >= 5 ? time() + 900 : null,
            ]);
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            http_response_code(500);
        }
    }

    http_response_code(403); // FORBIDDEN
    echo json_encode(["message" => "Wrong creditentials"]);
}
