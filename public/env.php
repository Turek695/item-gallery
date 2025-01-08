<?php
function loadEnv($path)
{
	if (!file_exists($path)) {
		throw new Exception("The .env file does not exist at $path");
	}

	$lines = file($path);
	$env = [];

	foreach ($lines as $line) {
		if (strpos(trim($line), '#') === 0 || strpos($line, '=') === false) {
			continue;
		}

		list($key, $value) = explode('=', $line, 2);
		$env[trim($key)] = trim($value);
	}

	return $env;
}
