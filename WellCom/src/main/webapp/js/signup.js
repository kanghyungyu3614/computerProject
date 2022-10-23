function signup() {
	let mid = document.querySelector('.mid').value
	let mpw = document.querySelector('.mpw').value
	let mname = document.querySelector('.mname').value
	let mphone = document.querySelector('.mphone').value

	let maddress1 = document.querySelector('#sample4_postcode').value
	let maddress2 = document.querySelector('#sample4_roadAddress').value
	let maddress3 = document.querySelector('#sample4_jibunAddress').value
	let maddress4 = document.querySelector('#sample4_detailAddress').value
	
	// input이 아닌 div에 innerHTML로 넣은 값은 .value가 아닌 .innerHTML로 와야한다. ☆☆주의할 것!!☆☆
	let check1 = document.querySelector('.check1').innerHTML
	let check2 = document.querySelector('.check2').innerHTML
	let check3 = document.querySelector('.check3').innerHTML
	let check4 = document.querySelector('.check4').innerHTML
	let check5 = document.querySelector('.check5').innerHTML
	let check6 = document.querySelector('.check5').innerHTML
	
	// 값이 있으면서 유효성 검증이 통과했으면 AJAX로 폼을 전송한다.
	if(mid && mpw && mname && mphone && maddress1 && maddress2 && maddress3 && maddress4
		&& check1 == "" && check2 == "" && check3 == "" && check4 == "" && check5 == "" && check6 == "") {
		if(document.querySelector('#confirm1').checked == false) {
			alert('이용약관에 동의해주세요.');
			return
		} else if(document.querySelector('#confirm2').checked == false) {
			alert('개인정보 수집에 동의해주세요.');
			return
		} else {
			$.ajax({
				url: "/WellCom/member/signup",
				data: {
						"mid": mid, "mpw": mpw, "mname": mname, "mphone": mphone,
						"maddress1": maddress1, "maddress2": maddress2,
						"maddress3": maddress3, "maddress4": maddress4
					},
				type: 'POST',
				success: function(re) {
					if(re === 'true') {
						alert('가입 성공!!')
						location.href='../index.jsp'
					} else {
						alert('DB 오류!!')
						location.reload()
					}
				}
			})
		}
	} else {
		alert('올바른 정보를 입력해주세요.')
	}
}
// 아이디
function mevent1(){
	let mid = document.querySelector(".mid").value
	let midj = /^[a-zA-Z0-9]{5,20}$/
	
	if( midj.test(mid) ){
		$.ajax({ // ID 중복검사
			url : "http://localhost:8080/WellCom/member/idcheck",
			data : { "mid" : mid } , 
			success : function( re ) { 
				if( re === 'true'){
					document.querySelector(".check1").innerHTML = "사용중인 아이디입니다."
				}
				else{
					document.querySelector(".check1").innerHTML = ""
				}
			 }
		})
		
	}else{
		document.querySelector(".check1").innerHTML = '알파벳/숫자 조합 5~20글자로 해주세요.'
	}
}
// 비밀번호
function mevent2(){
	let mpw = document.querySelector(".mpw").value
	let mpwj = /^[a-zA-Z0-9]{5,20}$/
	if( mpwj.test(mpw) ){
		document.querySelector(".check2").innerHTML = ""
		mevent3()
	}else{
		document.querySelector(".check2").innerHTML = "알파벳/숫자 조합 5~20글자로 해주세요."
	}
}
// 비밀번호 확인
function mevent3(){
	let mpw = document.querySelector(".mpw").value
	let mpwcheck = document.querySelector(".mpwcheck").value
	if( mpw == mpwcheck ) {
		document.querySelector(".check3").innerHTML = ""
	} else {
		document.querySelector(".check3").innerHTML = "패스워드가 일치하지 않습니다."
	}
}
// 이름
function mevent4(){
	let mname = document.querySelector(".mname").value;			
	let mnamej = /^[a-zA-Z가-힣]{2,20}$/
	if( mnamej.test( mname) ){
		document.querySelector(".check4").innerHTML = ""
	} else {
		document.querySelector(".check4").innerHTML = "영/한 2~20글자로 해주세요."	
	}
}
// 전화번호
function mevent5(){
	let mphone = document.querySelector(".mphone").value
	let mphonej = /^([0-9]{2,3})-([0-9]{3,4})-([0-9]{3,4})$/
	if( mphonej.test(mphone) ){
		document.querySelector(".check5").innerHTML = ""
	} else {
		document.querySelector(".check5").innerHTML = "예) 지역번호-XXXX-XXXX 형식."
	}
}
// 주소
function mevent6() {
	let sample4_postcode =  document.querySelector("#sample4_postcode").value
	let sample4_roadAddress =  document.querySelector("#sample4_roadAddress").value
	let sample4_jibunAddress =  document.querySelector("#sample4_jibunAddress").value
	let sample4_detailAddress =  document.querySelector("#sample4_detailAddress").value

	if(sample4_postcode == "" || sample4_roadAddress == "" || sample4_jibunAddress == "" || sample4_detailAddress == "") {
		document.querySelector(".check6").innerHTML = "모든 주소를 입력해주세요."
	} else {
		document.querySelector(".check6").innerHTML = ""
	}
}


//sample4_postcode.addEventListener( 'change' ,  addresscheck )	// change 된 객체의 정보를 addresscheck함수에게 인수로 전달
//sample4_roadAddress.addEventListener( 'change' ,  addresscheck )
//sample4_jibunAddress.addEventListener( 'change' ,  addresscheck )
//sample4_detailAddress.addEventListener( 'change' ,  addresscheck )

/* 카카오 우편 api */
   //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
function sample4_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample4_postcode').value = data.zonecode;
            document.getElementById("sample4_roadAddress").value = roadAddr;
            document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
            
            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                document.getElementById("sample4_extraAddress").value = extraRoadAddr;
            } else {
                document.getElementById("sample4_extraAddress").value = '';
            }

            var guideTextBox = document.getElementById("guide");
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                guideTextBox.style.display = 'block';

            } else if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                guideTextBox.style.display = 'block';
            } else {
                guideTextBox.innerHTML = '';
                guideTextBox.style.display = 'none';
            }
        }
    }).open();
}
/* 카카오 우편 api end */

