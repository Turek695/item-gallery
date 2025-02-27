<?php

require_once 'env.php';

$envPath = '/home/users/turluk69/.env_galeria';
$env = loadEnv($envPath);

return [
	'database' => [
		'host' => $env['DB_HOST'],
		'name' => $env['DB_NAME'],
		'user' => $env['DB_USER'],
		'password' => $env['DB_PASS']
	]
];
