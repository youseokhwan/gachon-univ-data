package com.example.a190502_project01;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;


// // "+)"는 따로 내가 쓴 것!
// handler: 객체가 보낸 메시지 수신
//          메인 쓰레드와 서브 쓰레드간 메시지 전달
// // +) LL로 정보 다 담아놨다가 핸들러가 FIFO로 처리?
// ArrayList: 객체 생성과 함께 데이터를 저장할 수 있는 영역이 존재
// thread.start()
// sendEmptymessage() 숫자 전달 msg.what(id)
//     msg.what(1111) int : id
//     FIFO(First In First Out)
// sendMessage() msg.what, msg.arg1 msg.arg2

public class MainActivity extends AppCompatActivity {
SocketClient client;
LinkedList<SocketClient> threadList;
// 객체 생성시 데이터 저장 영역이 생기지 않으며 서로 인접한 데이터를 가리킨다.
// LinkedList 저장 영역에 SocketClient ip.port 영역 생성
// Handler handler = new Handler();

    switch(msg.what) {  // 여러 개의 메시지를 구분하기 위한 메시지 핸들러
                        // 핸들러를 구분하기 위한 구분자
        case 0:

    }



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
