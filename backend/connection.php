<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();


/**
 * Classe de connexion. 
 * Pour récuperer une connexion à la database: $conn = Connection::getConnection();
 */
class Connection
{
    private static ?PDO $conn = null;

    public static function getConnection(): pdo | null
    {
        if (self::$conn === null) {
            try {
                self::$conn = new PDO("mysql:host=" . $_ENV['DB_HOST'] . ";dbname=" . $_ENV['DB_NAME'] . ";port=" . $_ENV['DB_PORT'] . ";charset=utf8mb4", $_ENV['DB_USER'], $_ENV['DB_PASSWORD'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
                return self::$conn;
            } catch (PDOException $e) {
                echo $e->getMessage();
                return null;
            }
        } else
            return self::$conn;
    }
}
