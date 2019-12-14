// 문제 #1 - `gachon-todo-footer` 컴포넌트 전역 등록
Vue.component('gachon-todo-footer', {
    template: '<p>가천 글로벌 컴포넌트 등록</p>'
});

// 문제 #2 - `gachon-todo-list` 컴포넌트 지역 등록
var cmp = {
    template: '<p>가천 로컬 컴포넌트 등록</p>'
};

var app = new Vue({
    el: '#app',
    data: {
        message : '여기는 부모 컴포넌트 입니다.'
    },
    
    // 문제 #2 - `gachon-todo-list` 컴포넌트 지역 등록
    components: {
        'gachon-todo-list': cmp
    }
});