<?php
	
	$host = "localhost";/*"mysql.hostinger.in";*/
	$user = "root";/*"u821444455_rdas";*/
	$pass = "";/*"shyamolimaburagohain";*/
	$db = "testdb";/*"u821444455_labdb";*/

	$username = $_POST["username"];
	$password = $_POST["password"];
	$noData = "";

	$conn = mysqli_connect($host, $user, $pass, $db) or die("Unable to connect !");
	
	$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";

	$result = mysqli_query($conn,$query);

	if(mysqli_num_rows($result) == 1)
	{
		session_start();
		$_SESSION["auth"] = TRUE;
		header("location:home.php");
		setcookie("user",$username,0);
	}
	else
	{
		$noData = "<br><h1 style='text-align:center;color:red;font-weight:bold;'>Wrong USERNAME or PASSWORD !</h1>";
		include "login.html";
	}

?>