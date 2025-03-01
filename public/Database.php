<?php

class Database {
	public $connection;

	public function __construct() {
		$config = require '../config.php';
		$dsn = "mysql:".http_build_query($config['database'], '', ';');
		$db_user = $config['db_user'];
		try {
			$this->connection = new PDO($dsn, $db_user['name'], $db_user['pass'], [
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
			]);
		} catch (PDOException $e) {
			die("Database connection failed: " . $e->getMessage());
		}
	}

	public function query($query, $params = []) {
		$stmt = $this->connection->prepare($query);
		$stmt->execute($params);
		return $stmt;
	}
}
