Vue.component('gachon-child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

// 문제 4
Vue.component('gachon-sibling-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: '부모 컴포넌트 입니다.',

        // 문제 5
        gachonAnotherMessage: 'Vue.js 너무 재밌어요.'
    }
});