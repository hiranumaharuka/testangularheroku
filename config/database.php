<?php
// used to connect to the database
ini_set( 'display_errors', 1 );
$url = parse_url(getenv("CLEARDB_DATABASE_URL"));
print_r($url);
$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

$conn = new mysqli($server, $username, $password, $db);
$conn->set_charset('utf8');
?>
