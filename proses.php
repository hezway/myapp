<?php
		$username = $_GET['username'];
		$password = $_GET['password'];
		if($username == 'operator' && $password == '12345')
		{
			echo "1";	
		}
		else
		{
			echo "0";
		}
	/*
	include "config/koneksi.php";
	function antiinjection($data){
  		$filter_sql = mysql_real_escape_string(stripslashes(strip_tags(htmlspecialchars($data,ENT_QUOTES))));
  		return $filter_sql;
	}

	//$username = antiinjection($_POST['username']);
	//$pass     = antiinjection($_POST['password']);
	
	$username = $_POST['username'];
	$password = $_POST['password'];

	$login=mysql_query("SELECT * FROM user WHERE username='$username' AND password='$password'");
	$ketemu=mysql_num_rows($login);
	$r=mysql_fetch_array($login);

	// Apabila username dan password ditemukan
	if ($ketemu > 0){
  		//session_start();
  		//session_register("namauser");
  		//session_register("passuser");

  		//$_SESSION[namauser]     = $r['username'];
  		//$_SESSION[passuser]     = $r['password'];
  
  		echo "0";
	}
	else{
		
		echo "1";
	}
	*/
?>