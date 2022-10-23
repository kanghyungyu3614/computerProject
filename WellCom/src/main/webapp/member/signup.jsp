<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="../css/header.css" rel="stylesheet">
	<link href="../css/signup.css" rel="stylesheet">
	<link href="../css/footer.css" rel="stylesheet">

</head>
<body>

	<%@include file="../header.jsp" %>

	<div class="signup_inner">
		<div class="signup_box">
			<form>
				<div class="input_tag">아이디</div> <input class="mid" onkeyup="mevent1()"><br>
				<div class="check1"></div>
				<div class="input_tag">패스워드</div> <input type="password" class="mpw" onkeyup="mevent2()"><br>
				<div class="check2"></div>
				<div class="input_tag">패스워드확인</div> <input type="password" class="mpwcheck" onkeyup="mevent3()"><br>
				<div class="check3"></div>
				<div class="input_tag">이름</div> <input class="mname" onkeyup="mevent4()"><br>
				<div class="check4"></div>
				<div class="input_tag">핸드폰번호</div> <input class="mphone" onkeyup="mevent5()"><br>
				<div class="check5"></div>
				<div>
					<span>주소</span>
					<span>
						<span>
							<input type="text" id="sample4_postcode" placeholder="우편번호" name="maddress1" onkeyup="mevent6()">
							<input type="button" onclick="sample4_execDaumPostcode()" value="우편번호 찾기"><br>
						</span>
						<span>
							<input type="text" id="sample4_roadAddress" placeholder="도로명주소" name="maddress2" onkeyup="mevent6()">
							<input type="text" id="sample4_jibunAddress" placeholder="지번주소" name="maddress3" onkeyup="mevent6()">
						</span>
					</span>
					<span>
						<input type="text" id="sample4_detailAddress" placeholder="상세주소" name="maddress4" onkeyup="mevent6()">
					</span>
					<div class="check6"></div>
					<br>
				</div>
				<span class="confirmbox">
					<textarea readonly="readonly" ></textarea>
					<input id="confirm1" type="checkbox"> <span>[필수] 이용약관 동의</span>
					<br>
					<textarea readonly="readonly" ></textarea>
					<input id="confirm2" type="checkbox"> <span>[필수] 개인정보 수집 및 이용 동의</span>
				</span>
				<br>
				<button class="input_button" type="button" onclick="signup()">회원가입</button>
			</form>
		</div>
	</div>

	<%@include file="../footer.jsp" %>

	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="../js/signup.js"></script>

</body>
</html>
