   /* 파일 전체에서 ESLint 규칙 경고 미사용 선언 */
   /* eslint-disable */

   // 제어 대상의 문서객체(DOM객체)를 찾아 각 변수에 저장
   var $form = $('form[name=cal]');
   var $input = $form.find('input');
   //console.log($input); 18개
   var $cls_btn = $('cls_btn');
   var $result_btn = $('result_btn');
   var $result = $form.find('input[name=result]');

   // 계산기 초기화(clear)-결과창의 값을 0으로 설정
   function clr() {
   	// 결과창의 값을 0으로 설정
   	$result.val(0);
   	// val() 메소드는 입력요소의 value값을 읽거나 지정하는 메소드
   } //end of cls()

   /* 계산기 입력 처리 함수[숫자, 사친연산자 버튼 클릭시 호출됨]
      - 숫자나 사칙연산 버튼에서 입력된 값을 매개변수로 받아 계산기 결과창에 출력
   */
   function calc(value) {
   	// 사용자가 입력하기 전에 결과창의 값이 0이면 ''로 초기화
   	if ($result.val() == 0) {
   		$result.val('');
   	}

   	// 입력값을 결과창에 출력(입력값을 문자열로 +연산 처리)
   	var val = $result.val() + value;
   	console.log(val);
   	$result.val(val); // 입력값을 결과창에 출력
   } //end of cals()

   /* 입력한 값을 계산하여 결과창에 표시하는 함수[= 버튼 클릭시 호출]
      - 입력된 값은 문자열이기 때문에 eval() 함수를 이용하여 계산하고,
      - 계산 결과값을 결과창에 표시 
   */
   function calculate() {
   	//eval() 함수를 이용하여 입력된 수식을 계산(실행)
   	var result_value = eval($result.val());

   	// 결과창에 표시
   	$result.val(result_value);
   } //end of my_result()

   // ------------------------------------------------------------
   /* 숫자 및 사칙연산 버튼 클릭시 이벤트 처리
       - 숫자와 사칙연산 버튼에 onclick 이벤트 등록('=', 'clear' 버튼 제외)
       - 버튼 클릭시 처리할 콜백함수 선언(cal()함수 호출)
       - 콜백함수 : 입력한 숫자와 사칙연산자를 매개변수로 calc()함수 호출
   */
   $('input').click(function () {
   	// 현재(this) 사용자가 클릭한 요소의 value 값을 저장
   	var input_value = $(this).val();

   	// 숫자와 사칙 연산자만 입력 처리 - 클릭한 버튼의 값을 인자로 calc(숫자) 함수 호출
   	if (input_value != '=' && input_value != 'clear') {
   		calc(input_value); // 클릭한 버튼의 값을 인자로 calc(숫자) 함수 호출
   	}

   }); //end of input


   /* [cls_btn 버튼 클릭 이벤트 처리] 계산기 초기화 처리
      - clear(cls_btn) 버튼에 onclick 이벤트를 연결하고
      - cls_btn 버튼 클릭시 clr() 호출
	  - 콜백함수 : 계산기 결과창을 초기화(0)하는 clr() 함수 호출
   */
   $('.cls_btn').click(function () {
   	clr();
   }); // end of cls_btn


   /* [ = 버튼 클릭 이벤트 처리] 입력한 값을 연산
      - "="(result_btn) 버튼에 onclick 이벤트를 연결하고
      - 버튼 클릭시 언산할 calculate();
      - 예외처리 : 연산 오류(err)시 결과창에 "입력오류"라고 표시
   */
   $('.result_btn').click(function () {
   	try {
   		calculate();
   	} catch {
   		$result.val('입력오류');
   	}

   }); // end of result_btn