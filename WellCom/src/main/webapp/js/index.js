loginload()
function loginload() {
	$.ajax({
		url: "/WellCom/member/loginload",
		success: function (re) {
			// 처음 리로드할때 정보 없으면 그냥 함수를 종료시킨다.
			if(re == ""){
				document.querySelector('.join1').innerHTML = "<a href='/WellCom/member/signup.jsp'>회원가입</a>"
				document.querySelector('.join2').innerHTML = "<a href='/WellCom/member/login.jsp'>로그인</a>"
				return;
			}
			let member = JSON.parse(re)
			document.querySelector('.join1').innerHTML = "<span style='font-weight:700px; font-size: 20px; line-height: 40px;'>("+member.mid+")</span>님"
			document.querySelector('.join2').innerHTML = "<span style='cursor: pointer;' onclick='logout()'>로그아웃</span>"
			console.log(member.mno)
			console.log(member.mid)
			console.log(member.mpw)
			console.log(member.mname)
			console.log(member.mphone)
			console.log(member.mdate)
			console.log(member.maddr)
		}
	})
}

function logout() {
	$.ajax({
		url: "/WellCom/member/logout",
		success: function (re) {
			if(re == "true") {				
				alert('로그아웃!!')
				location.reload()
				loginload()
			}
			else {
				return;
			}
		}
	})
}
