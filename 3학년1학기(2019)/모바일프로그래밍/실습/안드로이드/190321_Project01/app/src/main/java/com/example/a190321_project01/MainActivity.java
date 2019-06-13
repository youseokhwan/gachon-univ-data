package com.example.a190321_project01;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClick(View view) {
//        Toast.makeText(getApplicationContext(), "버튼이벤트작성", Toast.LENGTH_SHORT).show();
        switch(view.getId()) {
            case R.id.button1:
                Toast.makeText(getApplicationContext(), "버튼1", Toast.LENGTH_SHORT).show();
                break;
            case R.id.button2:
                Toast.makeText(getApplicationContext(), "버튼2", Toast.LENGTH_SHORT).show();
                break;
        }
    }
}
