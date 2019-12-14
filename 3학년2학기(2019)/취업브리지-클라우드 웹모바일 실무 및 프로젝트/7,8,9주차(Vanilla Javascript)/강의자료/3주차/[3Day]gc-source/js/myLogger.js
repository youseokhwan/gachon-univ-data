// console.log()처리하는 함수
// 외부에서 사용하게 하기 위해서 
// exeport를 붙여준다.
export default function log2(data){
    console.log(data);
}
// [주의]export default는 여러개 사용하면 오류가 발생함.
// [주의]export default와 const는 같이 사용하면 안된다고
//       가이드가 나와있음
// 방금전에 오류가 발생!!
export const getTime = () => {
    return Date.now();
}
// 
export const getCurrentHour = () =>{
    return (new Date).getHours();
}

/** class */
export class MyLogger{
    constructor(props){
        this.lectures = ['java','iOS'];
    }
    getLecture(){
        return this.lectures;
    }
    getTime(){
        return Date.now();
    }
}



