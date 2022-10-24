<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="../css/header.css" rel="stylesheet">
	<link href="../css/login.css" rel="stylesheet">
	<link href="../css/footer.css" rel="stylesheet">

</head>
<body>

	<%@include file="../header.jsp"%>
	<div class="inner">
	<div class="login_inner">	
		<form>
			<span>아이디 : </span><input type="text" class="mid"><br><br>
			<span>패스워드 : </span><input type="password" class="mpw"><br><br>
			<button type="button" onclick="login()">로그인</button>
		</form>
	</div>

	<%@include file="../footer.jsp"%>
	</div>
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="../js/login.js"></script>

</body>
</html>
