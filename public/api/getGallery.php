<?php
require_once '../env.php';

try {
	$config = require '../config.php';

	$db = new Database($config['database']);

	$query = "SELECT id, name, pictures FROM items";

	$items = $db->query("SELECT * FROM gallery")->fetchAll();

	echo json_encode($items);
} catch (PDOException $e) {
	die("Database connection failed: " . $e->getMessage());
}

?>
