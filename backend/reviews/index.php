<?php

declare(strict_types=1);

require_once "./controllers.php";

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
        get_reviews();
        break;

    case "POST":
        modify_review_status();
        break;

    default:
        http_response_code(405);
        echo json_encode([
            "message" => "Method not allowed"
        ]);
        break;
}
