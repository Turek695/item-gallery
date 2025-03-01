<?php

require_once 'env.php';

$envPath = '/home/users/turluk69/.env_galeria';
$env = loadEnv($envPath);

return [
	'database' => [
		'host' => $env['DB_HOST'],
		'port' => 3306,
		'dbname' => $env['DB_NAME'],
		'charset' => 'utf8mb4',
	],
	'db_user' => [
		'name' => $env['DB_USER'],
		'pass' => $env['DB_PASS'],
	]
];
