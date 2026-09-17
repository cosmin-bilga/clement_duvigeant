<?php

declare(strict_types=1);

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth
{
    private static string $secret;

    public static function init(): void
    {
        self::$secret = $_ENV['JWT_SECRET'];
    }

    public static function generate(int $userId): string
    {
        $issuedAt = time();
        $expiration = $issuedAt + (int) $_ENV['JWT_EXPIRATION'];

        $payload = [
            'iss' => 'clement_duvigeant',
            'iat' => $issuedAt,
            'exp' => $expiration,
            'sub' => $userId
        ];

        return JWT::encode(
            $payload,
            self::$secret,
            'HS256'
        );
    }

    public static function validate(string $token): object
    {
        return JWT::decode(
            $token,
            new Key(self::$secret, 'HS256')
        );
    }
}
