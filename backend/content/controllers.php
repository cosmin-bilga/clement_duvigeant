<?php

declare(strict_types=1);

require_once "../connection.php";
require_once "../jwt.php";

Auth::init();

function add_content(): void
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

    if (!isset($_POST["content"])) {
        http_response_code(401);
        echo json_encode([
            "message" => "Content is missing"
        ]);
        return;
    }

    if (isset($_POST["id"])) {
        modify_content();
        return;
    }

    if (!isset($_POST["location"])) {
        http_response_code(401);
        echo json_encode([
            "message" => "Location is missing"
        ]);
        return;
    }


    $conn = Connection::getConnection();

    try {
        $sql = "INSERT INTO content (location, content) VALUES (:location, :content)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":content" => $_POST["content"],
            ":location" => $_POST["location"]
        ]);
        //$res = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
        return;
    }

    http_response_code(201);
    echo json_encode([
        "message" => "Content added"
    ]);
}

function get_content(): void
{

    $conn = Connection::getConnection();

    try {
        $sql = "SELECT * FROM content";
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
        echo json_encode(["message" => "Content not found"]);
        return;
    }

    echo json_encode(["content" => $res]);
}

function modify_content(): void
{

    if (!isset($_POST["content"])) {
        http_response_code(401);
        echo json_encode([
            "message" => "Content is missing"
        ]);
        return;
    }

    $conn = Connection::getConnection();

    if ((int)$_POST["id"] != -1) {
        try {
            $sql = "UPDATE content SET content=:content WHERE id=:id";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ":content" => $_POST["content"],
                ":id" => (int)$_POST["id"]
            ]);
            // $res = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            http_response_code(500);
            return;
        }
    } else {

        if (!isset($_POST["location"])) {
            http_response_code(401);
            echo json_encode([
                "message" => "Location is missing"
            ]);
            return;
        }

        try {
            $sql = "UPDATE content SET content=:content WHERE location=:location";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ":content" => $_POST["content"],
                ":location" => $_POST["location"]
            ]);
            // $res = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            http_response_code(500);
            return;
        }
    }

    http_response_code(200);
    echo json_encode([
        "message" => "Content updated",
    ]);
}

function delete_content(int $id)
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
        $sql = "DELETE FROM content WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":id" => $id
        ]);
        //  $res = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo $e->getMessage();
        http_response_code(500);
        return;
    }

    http_response_code(200);
    echo json_encode([
        "message" => "Content deleted",
    ]);
}
