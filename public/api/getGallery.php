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

	$query = "SELECT id, name, pictures FROM items";
	$statement = $pdo->prepare($query);
	$statement->execute();

	$items = $statement->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($items);
} catch (PDOException $e) {
	die("Database connection failed: " . $e->getMessage());
}

?>
