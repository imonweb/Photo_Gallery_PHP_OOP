<?php
/*  Autoload deprecated*/
/*
function __autoload($class)
{
	$class = strtolower($class);
	$the_path = "includes/{$class}.php";

	if( file_exists($the_path) ){
		require_once($the_path);
	} else {
		die("This file name {$class}.php was not found...");
	}
}
*/

function classAutoLoader($class)
{
	$class = strtolower($class);
	$the_path = "includes/{$class}.php";

	if( is_file($the_path) && !class_exists($the_path) ){
		include $the_path;
	}

}

spl_autoload_register('classAutoLoader');


function redirect($location)
{
	header("Location: {$location}");
}









?>