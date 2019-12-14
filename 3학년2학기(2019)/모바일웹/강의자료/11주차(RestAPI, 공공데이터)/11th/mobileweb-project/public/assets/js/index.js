/* 서버에서 사용자에게 응답하는 기본 웹 문서(/view/layout/default.hbs)에서 사용하는 스크립트 */

$(document).ready(function () {

     console.log('call : /public/index.js');
    
    /* 경락정보조회 및 저장을 서버에 요청 
        "경락정보조회및저장의 뷰(views/reqSaveInfo/form.hbs) 화면에서 
        날짜, 저장개수, 청과종류를 선택한 후 "조회및저장하기' 버튼(#btn-market-save)을
        클릭하면 fetch API를 이용하여 'reqSaveInfo/result' 요청 패스로
        데이터를 DB에 저장할 것을 요청하는 이벤트 */
    $("#btn-market-save").click(function () {

        var _this = $(this)//button의 this를 저장
        $(this).prop("disabled", true); //버튼을 또 못누르도록
        $(this).text("로딩중..."); //버튼 텍스트 바꾸어주기

        var date = $("input[name*='date']").val();
        var count = $("input[name*='count']").val();
        var mcode = $("select[name*='mcode']").val();

        /* fetch API를 이용하여 'reqSaveInfo/result' 요청 패스로 요청
           - routes.js의 app.post("/reqSaveInfo/result",auth.requiresLogin, 
             marketReqSaveInfo.createResult) 라우팅에 의해 서버에 요청하고,
             그 결과를 DB에 저장한 후, 상태코드를 response 객체로 응답함  */
        // app/controller/reqSaveInfoController.js의 createResult 전송합니다.
        fetch('/reqSaveInfo/result', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({date:date, mcode:mcode, count:count}),
        }).then(function (response) {//응답을 response 객체로 받음
            /* 조회된 개수가 0개 일경우 200을 리턴합니다. */
            if (response.status === 200) {
                location.reload();
            } else {
                swal({
                    type: 'warning',
                    title: '주의',
                    text: "조회된 결과수가 0개이므로 저장되지 않았습니다.",
                })
            }
            _this.prop("disabled", false);//버튼을 원래상태로 변경
            _this.text("조회및저장하기");//버튼을 원래상태로 변경
        }).catch(function (data) {
            _this.prop("disabled", false);//버튼을 원래상태로 변경
            _this.text("조회및저장하기");//버튼을 원래상태로 변경
            showError(msg)
        });
    });

    /* 서버에 데이터 삭제 요청     
        "경락정보조회및저장의 뷰(views/reqSaveInfo/form.hbs) 화면에서 
        "삭제' 버튼(#btn-market-save)을 클릭하면 ajax API를 이용하여 
        'reqSaveInfo/delete' 요청 패스로 데이터 삭제를 요청하는 이벤트 */
    $(".btn-delete-history").click(function () {
        /* ajax API를 이용하여 'reqSaveInfo/delete' 요청 패스로 요청
            - routes.js의 app.delete("/reqSaveInfo/delete",auth.requiresLogin, 
              marketReqSaveInfo.deleteResult); 라우팅에 의해 서버에 삭제를 요청하면,
              서버는 삭제 결과를 응답함  */
        // app/controller/reqSaveInfoController.js의 deleteResult로 전송합니다.
        $.ajax({
            url: '/reqSaveInfo/delete',
            type: "DELETE",
            data: {
                'id': $(this).data("id"), //id값
            },
            success: function () {
                location.reload();
            },
            error: (msg) => showError(msg),
        })


    });
});

//에러메시지 함수
function showError(msg) {
    swal({
        type: 'error',
        title: '에러코드',
        text: JSON.stringify(msg),
    })
}
