<?php
	$user = json_decode(file_get_contents('php://input'));
	if ($user->email == 'user' && $user->password == '123') {
		print 'success';
	} else {
		print 'error';
	}

?>