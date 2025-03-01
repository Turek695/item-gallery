<?php
require '../Database.php';

try {
	$db = new Database();

	$query = "SELECT id, name, pictures FROM items";

	$items = $db->query($query)->fetchAll();

	echo json_encode($items);
} catch (PDOException $e) {
	die("Database connection failed: " . $e->getMessage());
}

?>
