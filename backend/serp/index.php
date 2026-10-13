<?php

require_once __DIR__ . '/../vendor/autoload.php';
require_once "../connection.php";

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');

$apiKey = $_ENV['SERPAPI_KEY'];

$url = 'https://serpapi.com/search.json?' . http_build_query([
    'engine' => 'google_maps_reviews',
    'data_id' => '0x12ae15152d746de1:0x9292b5f1e813a3c',
    'hl' => 'fr',
    'api_key' => $apiKey
]);

$response = file_get_contents($url);

if ($response === false) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Unable to retrieve reviews'
    ]);
    exit;
}

$reviews = json_decode($response, true)["reviews"];

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
        $sql = "INSERT INTO reviews (link, review_id, user_name, date, rating, snippet, status, user_link, user_thumbnail) VALUES (:link, :review_id, :user_name, :date, :rating, :snippet, :status, :user_link, :user_thumbnail)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ":link" => $review["link"],
            ":review_id" => $review["review_id"],
            ":user_name" => $review["user"]["name"],
            ":date" => explode('T', $review['iso_date'])[0],
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
