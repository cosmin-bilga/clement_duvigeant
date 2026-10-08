<?php

declare(strict_types=1);

require_once "../connection.php";
require_once "../jwt.php";

Auth::init();

function update_reviews($data): void
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


    if (isset($_GET["id"])) {
        modify_review_status($_GET["id"], $data);
        return;
    }

    if (!isset($data["reviews"])) {
        http_response_code(400);
        echo json_encode(["message" => "reviews key required"]);
        return;
    } else {
        $reviews = $data["reviews"];
    }

    $conn = Connection::getConnection();

    if (!$reviews || gettype($reviews) !== "array") {
        http_response_code(400);
        echo json_encode([
            "message" => "Reviews missing or wrong format"
        ]);
        return;
    }

    foreach ($reviews as $review) {
        try {
            $sql = "SELECT * FROM reviews WHERE review_id=:review_id";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ":review_id" => $review["review_id"]
            ]);
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($res) // stop when a review that is in the DB is found (only add the recent one)
                break;
        } catch (PDOException $e) {
            echo $e->getMessage();
            http_response_code(500);
            return;
        }
        try {
            $sql = "INSERT INTO reviews (review_id, user_name, date, rating, snippet, status, user_link, user_thumbnail) VALUES (:review_id, :user_name, :date, :rating, :snippet, :status, :user_link, :user_thumbnail)";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ":review_id" => $review["review_id"],
                ":user_name" => $review["user"]["name"],
                ":date" => "2026-10-05",
                ":rating" => $review["rating"],
                ":snippet" => $review["snippet"],
                ":status" => "pending",
                ":user_link" => $review["user"]["link"],
                ":user_thumbnail" => $review["user"]["thumbnail"]
            ]);
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            http_response_code(500);
            return;
        }
    }

    http_response_code(201);

    echo json_encode([
        "message" => "Reviews updated",
    ]);
}

function get_reviews(): void
{
    $status = null;

    if (isset($_GET["status"]))
        $status = $_GET["status"];

    $conn = Connection::getConnection();

    if ($status) {
        try {
            $sql = "SELECT * FROM reviews WHERE status=:status";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ":status" => $status
            ]);
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["message" => $e->getMessage()]);
            return;
        }
    } else {
        try {
            $sql = "SELECT * FROM reviews";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["message" => $e->getMessage()]);
            return;
        }
    }

    http_response_code(200);
    echo json_encode($res);
}

function modify_review_status($review_id, $data): void
{

    if (!isset($data['status']) || !in_array($data["status"], ["rejected", "approved", "pending"])) {
        http_response_code(400);
        echo json_encode([
            "message" => "Status not set or invalid (approved, pending or rejected)"
        ]);
        return;
    } else {
        $status = $data['status'];
    }

    $conn = Connection::getConnection();

    try {
        $sql = "UPDATE reviews SET status=:status WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":status" => $status,
            ":id" => $review_id
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["message" => $e->getMessage()]);
        return;
    }

    http_response_code(200);

    echo json_encode([
        "message" => "Review updated"
    ]);
}
