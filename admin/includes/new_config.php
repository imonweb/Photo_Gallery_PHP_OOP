<?php 


// Database Connection Constants

define('DB_HOST','localhost');
define('DB_USER','imon');
define('DB_PASS','p@ssw0rd');
define('DB_NAME','oop_gallery_db');

$connection = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
if($connection){
	// echo "true";
}

// $connection = new mysqli_connect()


 ?>