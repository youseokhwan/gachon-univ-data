// let, var의 scope


// let을 사용하지 않고 만드는 간단한 프로그램
// var name = 'global var';
// function home() {
//     var homevar = 'homevar';
//     for(var i = 0; i < 100; i++) {

//     }
//     console.log(i);
// }
// home();


// ES6 적용된 문법
// 원래는 var, ex6 let 추가
// var => global, let => local variable
// scope!!
var name = 'global var';
function home() {
    var homevar = 'homevar';
    for(var i = 0; i < 100; i++) {

    }
    console.log(i);
}
home();