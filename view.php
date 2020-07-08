<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include database connection
include 'config/database.php';

// delete message prompt will be here

// select all data
error_reporting(E_ERROR);
$posts = [];
$sql = "SELECT * FROM posts;";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $posts[$cr]['postId']    = $row['postId'];
    $posts[$cr]['title'] = $row['title'];
    $posts[$cr]['content'] = $row['content'];
    $posts[$cr]['category'] = $row['category'];
    $posts[$cr]['authorId'] = $row['authorId'];
    $cr++;
  }

    //print_r($posts);

  echo json_encode($posts);
}
else
{
  http_response_code(404);
}
?>
