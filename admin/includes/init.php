<?php 

defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR);
// define('SITE_ROOT', DS . 'localhost' .  DS . 'photo_gallery_system');
define('SITE_ROOT', DS . 'Users' .  DS .'imon' .  DS . 'Sites' .  DS . 'OOP' . DS . 'udemy' . DS . 'gallery');

defined('INCLUDES_PATH') ? null : define('INCLUDES_PATH', SITE_ROOT.DS.'admin'.DS.'includes');

// require_once("functions.php");
// require_once("new_config.php");
// require_once("database.php");
// require_once("db_object.php");
// require_once("photo.php");
// require_once("user.php");
// require_once("session.php");

require_once(INCLUDES_PATH.DS."new_config.php"); 
require_once(INCLUDES_PATH.DS."database.php"); 
require_once(INCLUDES_PATH.DS."db_object.php");
require_once(INCLUDES_PATH.DS."user.php");
require_once(INCLUDES_PATH.DS."photo.php");
require_once(INCLUDES_PATH.DS."comment.php");
require_once(INCLUDES_PATH.DS."functions.php");
require_once(INCLUDES_PATH.DS."session.php");
require_once(INCLUDES_PATH.DS."paginate.php");



 ?>