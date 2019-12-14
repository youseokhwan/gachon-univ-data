// 기본적인 javascript 코드 실행해 보기
// console.log("Hello, World!");
// var a = 1;
// var b = 2;
// console.log(a+b);

// 자바스크립트 실행하는 방법
/*
    1) browser
        - 마우스 오른쪽 클릭 -> 검사
    2) node
        - 해당 javascript 파일 위치로 이동
        - node app.js(파일명)
    3) html 페이지 내에서 실행
        - <head></head> 태그 안에 넣어서 실행
        <html>
          <head>
            <script types="text/javascript" src="./js/app.js"></script>
          </head>
          <body></body>
        </html>
*/

/*
23. 변수 선언
    var sum;
    var a, b;
    x = 5; // 바로 대입
    var a=1, b=2, c=3;
*/

// console.log(x); // 변수가 선언되어 있지 않아 error 발생
// console.log(x); // 변수가 선언되어 있지 않고, 출력하는 아래에 할당되어 있지만
//                 // 위로 끌어올려져 존재는 인식하고 있고, 값을 출력하지 못함.
// var x=5;
// console.log(x); // 위에 선언되어 있어서 값을 출력
// undefined : 값이 없을 때 출력되는 것
/*
    public void print() {
        System.out.println("안녕하세요~!");
    }
*/

// 실습코드 01
// var name = "global var";
// function test1() {
//     var localvar = "local var";
//     for(var i = 0; i < 100; i++) {
//     }
//     console.log(i);
// }
// test1();

// var name = "global var";

// function test2() {
//     var localvar = "local var";
//     for(let i = 0; i < 100; i++) {
//     }
//     console.log(i);
// }
// test2();

// var name = "global var";
// function test3() {
//     var localvar = "local var";
//     for(let i = 0; i < 100; i++) {
//         console.log(i);
//     }
//     if(true) {
//         let check_if = "if값 체크";
//     }
//     console.log(check_if);
// }
// test3();

// function add() {}
// var square = function (){}
// var square = function sq(){}
// var square = new Function("x","return x * x");
// var 변수이름 = new Function(첫 번째 인수,두 번째 인수, ... n번째 인수,"함수 바디");

// 61. es6(ECMAScript 2015) String의 새로운 메소드들
let str = "hello world ~~";
let matchStr = "hello";

// 시작이 matchStr과 같은 문자열이 있는가?
console.log(str.startsWith(matchStr)); // true

// 끝이 matchStr과 일치하는 문자열이 있는가?
console.log(str.endsWith(matchStr)); // false

// "^" 문자열이 포함되어 있는가?
console.log(" include set ", str.includes("^")); // false

// 63. 연산자
// a+b 일때, +가 연산자이다.
// 연산자 우선순위 : 먼저 계산이 되는 순서
// 연산자 결합법칙 : 왼쪽과 결합해서 연산할지 아니면 오른쪽과 결합해서 연산할지를 결정하는 것
// 연산자 우선순위와 결합법칙
// 우선순위        연산자                                           결합법칙
// 1             ()(그룹연산자)                                     없음
// 2             .,[]                                            왼쪽->오른쪽
//               new(인수있음)                                     오른쪽->왼쪽
// 3             ()(함수호출)                                      왼쪽->오른쪽
//               new(인수없음)                                     오른쪽->왼쪽
// 4             ++(후위),--(후위)                                 없음
// 5             !,~,+(단항),-(부호반전),typeof,void,delete,        오른쪽->왼쪽
//               ++(전위),--(전위)
// 6             *,/,%                                          왼쪽->오른쪽
// 7             +,-,+(문자열)                                    왼쪽->오른쪽
// 8             <<,>>,>>>                                      왼쪽->오른쪽
// 9             <,<=,>,>=,in,instanceof                        왼쪽->오른쪽
// 10            ==,!=,===,!==                                  왼쪽->오른쪽
// 11            &                                              왼쪽->오른쪽
// 12            ^                                              왼쪽->오른쪽
// 13            |                                              왼쪽->오른쪽
// 14            &&                                             왼쪽->오른쪽
// 15            ||                                             왼쪽->오른쪽
// 16            ?:                                             오른쪽->왼쪽
// 17            yeild, yeild*                                  오른쪽->왼쪽
// 18            =,+=,-=,*=,/=,%=,<<=,>>>=,&=,^=,|=             오른쪽->왼쪽
// 19            ...                                            없음
// 20            ,                                              왼쪽->오른쪽