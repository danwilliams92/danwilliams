<?php
	if(isset($_POST['email'])) {
		
		$email_to = "dan-ver.2007@hotmail.co.uk";
		$email_subject = "Website message";
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		
		// create email headers
		$headers = 'From: '.$email_from."\r\n".
		'Reply-To: '.$email_from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subject, $email_message, $headers);  
	}
?>