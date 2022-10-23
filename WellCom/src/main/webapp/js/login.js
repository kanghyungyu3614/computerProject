function login() {
	
	let mid = document.querySelector(".mid").value
	let mpw = document.querySelector(".mpw").value

	$.ajax({
		url: "/WellCom/member/login",
		data: { "mid" : mid, "mpw" : mpw },
		success: function(re) {
			if(re == 1) {
				alert("로그인 성공!!")
				location.href="../index.jsp"
			} else if(re == 2) {
				alert("패스워드가 일치하지 않습니다.")
			} else if(re == 3) {
				alert("일치하는 아이디가 없습니다.")				
			} else if(re == 4) {
				alert("DB 오류")
			} else {
				alert("로그인 실패!!")
			}
		}
	})
}
