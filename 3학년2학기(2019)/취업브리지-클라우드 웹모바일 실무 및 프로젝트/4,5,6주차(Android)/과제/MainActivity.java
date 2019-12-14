package com.example.gachonmusic;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends Activity implements View.OnClickListener {
    String email;

    TextView text_user, text_logout;
    Button btn_genre[] = new Button[6];
    ScrollView musicList[] = new ScrollView[3];

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        text_user = (TextView)findViewById(R.id.text_user);
        text_logout = (TextView)findViewById(R.id.text_logout);
        btn_genre[0] = (Button)findViewById(R.id.btn_all);
        btn_genre[1] = (Button)findViewById(R.id.btn_rnb);
        btn_genre[2] = (Button)findViewById(R.id.btn_dance);
        btn_genre[3] = (Button)findViewById(R.id.btn_hiphop);
        btn_genre[4] = (Button)findViewById(R.id.btn_ballad);
        btn_genre[5] = (Button)findViewById(R.id.btn_rock);
        musicList[0] = (ScrollView) findViewById(R.id.musiclist_all);
        musicList[1] = (ScrollView) findViewById(R.id.musiclist_rnb);
        musicList[2] = (ScrollView) findViewById(R.id.musiclist_dance);

        text_user.setOnClickListener(this);
        text_logout.setOnClickListener(this);
        for(int i = 0; i < btn_genre.length; i++)
            btn_genre[i].setOnClickListener(this);

        Intent intent = getIntent();
        email = intent.getExtras().getString("email");
        text_user.setText(email);
    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.text_user) {
            Toast.makeText(this, "마이페이지 기능은 구현 예정입니다.", Toast.LENGTH_SHORT).show();
        }
        else if(v.getId() == R.id.text_logout) {
            Toast.makeText(this, "로그아웃 되었습니다.", Toast.LENGTH_SHORT).show();
            finish();
        }
        else if(v.getId() == R.id.btn_all) {
            for(int i = 0; i < btn_genre.length; i++)
                btn_genre[i].setBackgroundColor(Color.argb(0, 255, 255, 255));
            btn_genre[0].setBackgroundColor(Color.argb(109, 255, 193, 7));

            for(int i = 0; i < musicList.length; i++)
                musicList[i].setVisibility(View.INVISIBLE);
            musicList[0].setVisibility(View.VISIBLE);
        }
        else if(v.getId() == R.id.btn_rnb) {
            for(int i = 0; i < btn_genre.length; i++)
                btn_genre[i].setBackgroundColor(Color.argb(0, 255, 255, 255));
            btn_genre[1].setBackgroundColor(Color.argb(109, 255, 193, 7));

            for(int i = 0; i < musicList.length; i++)
                musicList[i].setVisibility(View.INVISIBLE);
            musicList[1].setVisibility(View.VISIBLE);
        }
        else if(v.getId() == R.id.btn_dance) {
            for(int i = 0; i < btn_genre.length; i++)
                btn_genre[i].setBackgroundColor(Color.argb(0, 255, 255, 255));
            btn_genre[2].setBackgroundColor(Color.argb(109, 255, 193, 7));

            for(int i = 0; i < musicList.length; i++)
                musicList[i].setVisibility(View.INVISIBLE);
            musicList[2].setVisibility(View.VISIBLE);
        }
        else if(v.getId() == R.id.btn_hiphop) {
            for(int i = 0; i < btn_genre.length; i++)
                btn_genre[i].setBackgroundColor(Color.argb(0, 255, 255, 255));
            btn_genre[3].setBackgroundColor(Color.argb(109, 255, 193, 7));

            for(int i = 0; i < musicList.length; i++)
                musicList[i].setVisibility(View.INVISIBLE);
            Toast.makeText(this, "힙합/발라드/락은 준비중입니다.", Toast.LENGTH_SHORT).show();
        }
        else if(v.getId() == R.id.btn_ballad) {
            for(int i = 0; i < btn_genre.length; i++)
                btn_genre[i].setBackgroundColor(Color.argb(0, 255, 255, 255));
            btn_genre[4].setBackgroundColor(Color.argb(109, 255, 193, 7));

            for(int i = 0; i < musicList.length; i++)
                musicList[i].setVisibility(View.INVISIBLE);
            Toast.makeText(this, "힙합/발라드/락은 준비중입니다.", Toast.LENGTH_SHORT).show();
        }
        else if(v.getId() == R.id.btn_rock) {
            for(int i = 0; i < btn_genre.length; i++)
                btn_genre[i].setBackgroundColor(Color.argb(0, 255, 255, 255));
            btn_genre[5].setBackgroundColor(Color.argb(109, 255, 193, 7));

            for(int i = 0; i < musicList.length; i++)
                musicList[i].setVisibility(View.INVISIBLE);
            Toast.makeText(this, "힙합/발라드/락은 준비중입니다.", Toast.LENGTH_SHORT).show();
        }
    }
}
