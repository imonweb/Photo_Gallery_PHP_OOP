<?php 


// Database Connection Constants

define('DB_HOST','localhost');
define('DB_USER','imon');
define('DB_PASS','p@ssw0rd');
define('DB_NAME','oop_gallery_db');
$connection = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
 
try {

	$connect = new PDO('mysql:host=localhost;dbname=oop_gallery_db;charset=utf8mb4','imon','p@ssw0rd');
	$connect->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
	echo $e->getMessage();
}



 ?>