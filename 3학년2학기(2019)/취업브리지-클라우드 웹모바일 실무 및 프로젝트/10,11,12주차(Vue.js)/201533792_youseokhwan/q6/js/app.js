var app = new Vue({
    el: '#app',
    data: {
        message : 'Gachon-Hello Vue.js',

        // #6-1
        gachonSecondMessage: '새로 추가한 message입니다!',

        // #6-2
        uid: '201533792',

        // #6-4
        flag: false
    },
    methods: {
        gachonClickBtn() {
            console.log('gachon-hi');
        },

        // #6-3
        gachonClickBtn2() {
            return alert('gachonClickBtn2 이벤트 호출입니다!');
        }
    }
});