
<?php

$servername = "localhost";

$username = "root"; 

$password = ""; 

$dbname = "web"; 

$con = new mysqli($servername, $username, $password, $dbname);

if ($con->connect_error) {

    die("Connection failed: " . $con->connect_error);

}

?> 

