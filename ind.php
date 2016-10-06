<?php
	
	$host = "localhost";/*"mysql.hostinger.in";*/
	$user = "root";/*"u821444455_rdas";*/
	$pass = "";/*"shyamolimaburagohain";*/
	$db = "testdb";/*"u821444455_labdb";*/

	$nameErr = $emailErr = $passErr = "";
	$username = $password = $email = $noData = "";

	$username = $_POST["username"];
	$password = $_POST["password"];
	$email = $_POST["email"];

	$conn = mysqli_connect($host, $user, $pass, $db) or die("Unable to connect !");
	
	$query = "SELECT * FROM users WHERE email='$email'";

	$result = mysqli_query($conn,$query);

	if(mysqli_num_rows($result) == 1)
	{
		$emailErr = "<p style='text-align:center;color:red;'>Already registered!? try the other button!</p>";
		include "index.html";
	}
	else
	{
		$query = "INSERT INTO users(username,email,password,active) VALUES('$username','$email','$password',1)";
		$result = mysqli_query($conn,$query);
		
		session_start();
		$_SESSION["auth"] = TRUE;
		header("location:home.php");
		setcookie("user",$username,0);
	}

?>