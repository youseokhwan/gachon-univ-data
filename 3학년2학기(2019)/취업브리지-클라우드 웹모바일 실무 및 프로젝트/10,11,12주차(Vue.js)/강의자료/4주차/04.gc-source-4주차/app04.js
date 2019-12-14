// 80.class(ECMAScript 2015, es6)

// class와 비슷하게 객체를 먼저 표현해보기
// function Health(name){
//     this.name = name;
// }

// Health.prototype.showHealth = function(){
//     console.log(this.name+"님 방가워요~~!!!");
// }

// const h = new Health("이호정");
// h.showHealth();

// class로 적용하기
// class Health{
//     constructor(name,lastTime){
//         this.name = name;
//         this.lastTime = lastTime;
//     }

//     showHealth(){
//         console.log("안녕하세요~!! "+this.name+"님! ");
//     }
// }

// const myHealth = new Health("정하은");
// myHealth.showHealth();

// Object.create() 
// new 키워드를 사용하지 않고 순수한 오브젝트를 만드는 방법(es5)
var healthObj = {
    showHealth: function(){
        console.log("오늘 운동시간은 "+this.healthTime);
    }
}

const myHealth = Object.create(healthObj);
myHealth.healthTime = "11:20";
myHealth.name = "박다융";

console.log(myHealth);






