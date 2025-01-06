<?php

function generateItemGallery($numItems = 50)
{
	$categories = ['Category A', 'Category B', 'Category C'];
	$items = [];

	for ($i = 1; $i <= $numItems; $i++) {
		$category = $categories[array_rand($categories)];
		$items[] = [
			'name' => 'Item ' . $i,
			'category' => $category,
			'picture_id' => 100 + $i
		];
	}

	return $items;
}

$items = generateItemGallery(50); // Generate 50 items
echo json_encode($items);
