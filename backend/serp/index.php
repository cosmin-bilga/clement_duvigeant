<?php

require_once __DIR__ . '/../vendor/autoload.php';

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

$data = json_decode($response, true);

echo json_encode($data['reviews']);
http_response_code(200);
