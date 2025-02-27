<?php

require_once 'env.php';

return [
	'database' => [
		'host' => $env['DB_HOST'],
		'name' => $env['DB_NAME'],
		'user' => $env['DB_USER'],
		'password' => $env['DB_PASS']
	]
];
