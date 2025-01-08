<?php
require_once '../env.php';

try {
	$envPath = '/home/users/turluk69/.env_galeria';
	$env = loadEnv($envPath);

	$databaseHost = $env['DB_HOST'];
	$databaseName = $env['DB_NAME'];
	$databaseUser = $env['DB_USER'];
	$databasePassword = $env['DB_PASS'];

	// Establish a connection
	$dsn = "mysql:host=$databaseHost;dbname=$databaseName;charset=utf8mb4";
	$pdo = new PDO($dsn, $databaseUser, $databasePassword);

	// Enable PDO exceptions for error handling
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	echo "Database connection successful!";
} catch (PDOException $e) {
	die("Database connection failed: " . $e->getMessage());
}

?>
