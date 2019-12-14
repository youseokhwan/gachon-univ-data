// 63. window.onload 이벤트
/*
    문서의 모든 컨텐츠(html,css,js)
    동일한 문서에는 onload가 하나만 존재해야 한다.
    중복될 경우에는 마지막에 선언된 onload가 실행이 된다.
*/

// 64. innerHTML 속성
/*
    <div></div>나 <p></p> 태그 안에 보여질 값을 가져오거나 출력을 할 때 사용
    <div id='start'>innerHTML</div>
    document.getElementById('start').innerHTML = "0.00";
    alert(document.getElementById('start').innerHTML);
*/

/*
67. 폼 컨트롤의 입력 값 읽기
    - 요소      type 속성의 값     프로퍼티             설명
     input     number,text      value          입력된 값을 문자열로 변환한 값
               checkbox,radio   checked        항목의 선택 여부를 뜻하는 논리 값
     select                     selectedIndex  선택된 option 요소를 가리키는 0부터 시작하는 번호
     textarea                   value          입력된 문자열
68. document.write()
    - javascript로 브라우져에 처리 결과를 출력
69. 함수를 정의하는 방법
    1) 함수 선언문으로 정의하는 방법
       function square(x) { return x*x; };
    2) 함수 리터럴로 정의하는 방법
       var square = function(x){ return x*x; };
    3) Function 생성자로 정의하는 방법
       var square = new Function("x","return x*x");
    4) 화살표 함수 표현식으로 정의하는 방법[ ECMAScript 6에서 추가]
       var square = x => x*x;
70. 함수 선언문을 프로그램의 첫머리로 끌어올린다.(hoisting)
    자바스크립트 엔진은 함수 선언문을 프로그램의 첫머리 또는 함수의 첫머리로 끌어올린다.
    따라서 함수 선언문으로 정의한 함수는 호출문이 그보다 앞에 위치해도 호출할 수 있다.
    console.log(square(2)); // 4
    function square(x){ return x*x;}
    Function 생성자, 화살표 함수 표현식
    변수에 그 함수의 참조를 할당해야 비로소 사용할 수 있는 상태가 된다.
    따라서 호출하는 코드보다 함수가 앞에 와야 한다.
    var sqaure = function(x){ return x*x; }
    console.log(square(2)); // 4
    var sqaure = new Function("x","return x*x");
    console.log(square(2)); // 4
    var sqaure = x => x*x;
    console.log(square(2)); // 4
71. 중첩함수(Nested Function)
    지역함수, 내부함수(Inner Function)
    . 외부 함수의 최상위 레벨에만 중첩함수를 작성할 수 있다.
    . 함수안의 if문과 while문 등의 문장 블록 안에는 중첩함수를 작성할 수 없다.
    . 중첩함수 안에 있는 변수는 중첩함수 안의 지역변수에 저장된다.
    . 외부 함수의 변수 유효 범위는 그 함수의 중첩 함수에까지 미친다.
    function norm(x){
      var sum2 = sumSquare();
      return Math.sqaure(sum2);
      function sumSquare(){
        sum = 0;
        for(var i=0; i<x.length; i++){
          sum += x[i]*x[i];
        }
        return sum;
      }
    }
    var a = [2,1,3,5,7];
    var n = norm(a);
    console.log(n);
72. 함수 호출하는 방법
    . 함수 호출
      var s = square(5);
    . 메소드 호출
      객체의 프로퍼티에 저장된 값이 함수 타입일 때는 그 프로퍼티를 메소드라고 한다.
      메소드를 호출할 때는 그룹 연산자인 ()를 붙여서 호출합니다.
      obj.m = function() {...};
      obj.m();
    . 생성자 호출
      함수의 참조를 저장한 변수 앞에 new 키워드를 추가하면 함수가 생성자로 동작한다.
      var obj = new Object();
      --------
      52. 생성자
          - 생성자로 객체 생성하기
          - function Card(suit, rank){
              this.suit = suit;
              this.rank = rank;
            }
            =>
            var card = {};
            card.suit = "하트";
            card.rank = "A";
          - 생성자로 객체를 생성할 때는 new 연산자를 사용한다.
          - var card = new Card("하트","A");
            console.log(card);  // -> Card
          - 생성자는 객체를 생성하고 초기화하는 역할을 한다.
          - 생성자를 사용하면 이름은 같지만 프로퍼티 값이 다른 객체(인스턴스) 여러 개를
            간단히 생성할 수 있다.
            var card1 = new Card("하트", "A");
            var card2 = new Card("클럽", "K");
            var card3 = new Card("스페이드", "2");
          - 메소드를 가진 객체를 생성하는 생성자
            function Circle(center, radiuds){
              this.center = center;
              this.radiuds = radiuds;
              this.area = function(){
                return Math.PI * this.radiuds * this.radiuds;
              }
            }
            var p = {x:0, y:0};
            var c = new Circle(p, 2.0);
            console.log("넓이 = "+ c.area()); // 넓이 = 12.56637...
       --------
       . call,apply를 사용한 간접 호출
         함수의 call과 apply 메소드를 사용하면 함수를 간접적으로 호출할 수 있습니다.
73. 즉시 함수 실행
    익명함수를 실행할때는 익명함수의 참조를 변수에 할당한 후에 그룹 연산자인()를 붙여서 실행한다.
    var f = function(){...};
    f();
    즉시 실행 함수
    (function(){...})();
    (function(){...}());
    함수 정의식을 함수 값으로 만들 수 있다.
    +function(){...}()
    +function(){
      return 1+1;
    }()
    즉시 실행 함수에도 인자값을 넘길 수 있다.
    (function(a,b){...})(1,2);
    즉시 실행 함수에도 이름을 붙일 수 있지만, 함수 내부에서만 유효하다.
    (function fact(n){
      if(n<=1) return 1;
      return n*fact(n-1);
    })(5); // 120
    즉시 실행 함수 실행결과를 변수에 할당할 수 있으며, 표현식 안에서 사용할 수 있다.
    즉시 실행 함수는 전역 유효 범위를 오염시키지 않는 이름 공간을 생성할 때 사용한다.
    (오염 : 같은 이름이나 컨텍스로 등록되어있는 것)
    var x = (function(){...})();
    1) 함수 선언문으로 정의하는 방법 (hoisting)
       - 전역, 로컬 컨텍스트에 등록이 되는 것(함수로 등록)
       function square(x) { return x*x; };
    2) 함수 리터럴로 정의하는 방법
       - 함수가 아니라 var의 객체로서 등록이된다.
       var square = function(x){ return x*x; };
    3) Function 생성자로 정의하는 방법
       var square = new Function("x","return x*x");
    4) 화살표 함수 표현식으로 정의하는 방법[ ECMAScript 6에서 추가]
       var square = x => x*x;
74. 함수의 인수
    1) 인수의 생략
    입력할 인수의 개수보다 적게 입력하면 입력되지 않은 인자는 undefined가 된다.
    function f(x,y){
      console.log("x = "+x+", y = "+y);
    }
    f(2); // x=2, y= undefined
    function multiple(a,b){
      b = b || 1;
      return a*b;
    }
    multiple(2,3); // 6
    multiple(2); // 2
    2) 가변길이 인수 목록(Arguments 객체)
    모든 함수에서 사용할 수 있는 지역변수 arguments ->Arguments
    arguments가 가지고 있는 속성
    arguments.length : 인수의 개수
    arguments.callee : 현재 실행되고 있는 함수의 참조
    function f(x,y){
      arguments[1] = 3;
      console.log("x = "+x+", y ="+y );
    }
    f(1,2); // -> x=1, y=3
    var params = "";
    function myConcat(separator){
      var s = "";
      for(var i=1; i<arguments.length; i++){
        s += arguments[i]; // apple/orange/peach
        if( i< arguments.length-1) s += separator;  // 구분자 /
      }
      console.log([].slice.call(arguments)); // 배열 객체로 변환할때 사용
      return s;
    }
    console.log(myConcat("/","apple","orange","peach")); // apple/orange/peach
*/

// 00. Object 선언하고 사용하기(개선된 방법)
// 개선된 방법으로 객체를 선언하고 사용해보자.
// const name = "ysh";
// const age = 25;

// const obj = {
//     name: name,
//     age: age
// };

// console.log(obj);
// -----
// function getObj() {
//     const name = "김건모";
//     const getName = function() {
//         return name;
//     }
//     const setName = function(newName) {
//         name = newName;
//     }
//     const printName = function() {
//         console.log(name);
//     }
//     return {
//         getName : getName,
//         setName : setName
//     };
// }
// var obj = getObj();
// console.log(obj);

/*
75. 재귀함수
    재귀 호출 : 함수가 자기 자신을 호출하는 행위(recursive call)
    재귀 함수 : 재귀 호출을 수행하는 함수
    재귀 함수의 기본
    function fact(n){
      if( n<=1 ) return 1;
      return n*fact(n-1);
    }
    fact(5); // -> 120
    // 함수 리터럴로 표현
    var fact2 = function f(n){
      if( n<=1 ) return 1;
      return n*f(n-1);
    }
    fact2(5);
   // arguments.callee로 익명함수 호출
    var fact3 = function(n){
      if( n<=1 ) return 1;
      return n*arguments.callee(n-1);
    }
    fact3(5);
76. 재귀함수 호출할 때 유의할 사항
    1) 재귀 호출은 반드시 멈춰야 한다. (무한루프 가능성)
    2) 재귀 호출로 문제를 간단하게 해결할 수 있을 때만 사용한다.(메모리를 많이 사용 가능)

 */

