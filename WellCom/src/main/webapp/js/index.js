loginload()
function loginload() {
	$.ajax({
		url: "/WellCom/member/loginload",
		success: function (re) {
			// 처음 리로드할때 정보 없으면 그냥 함수를 종료시킨다.
			if(re == ""){
				document.querySelector('.join1').innerHTML = "<a href='/WellCom/member/signup.jsp'>회원가입</a>"
				document.querySelector('.join2').innerHTML = "<a href='/WellCom/member/login.jsp'>로그인</a>"
				document.querySelector('.join3').innerHTML = "<a href='/WellCom/member/login.jsp'>마이페이지</a>"
				document.querySelector('.join4').innerHTML = "<a href='/WellCom/member/login.jsp'>장바구니</a>"
				document.querySelector('.join5').innerHTML = "<a href='/WellCom/member/login.jsp'>배송조회</a>"
				return;
			}
			let member = JSON.parse(re)
			document.querySelector('.join1').innerHTML = "<span style='font-weight:700px; font-size: 20px; line-height: 40px;'>("+member.mid+")</span>님"
			document.querySelector('.join2').innerHTML = "<span style='cursor: pointer;' onclick='logout()'>로그아웃</span>"
			if(member.mid == "admin") {
				document.querySelector('.join3').innerHTML = "<a href='/WellCom/member/upload.jsp'>상품등록</span>"
				document.querySelector('.join4').innerHTML = "<a href='/WellCom/member/stock.jsp'>재고확인</span>"
				document.querySelector('.join5').innerHTML = "<a href='/WellCom/member/shipping.jsp'>배송관리</span>"
			}
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
