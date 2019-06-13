package com.example.a190321_project05;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.os.Vibrator;
import android.view.View;

public class MainActivity extends Activity implements View.OnClickListener {
    Vibrator mVib;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mVib = (Vibrator)getSystemService(Context.VIBRATOR_SERVICE);
        findViewById(R.id.button1).setOnClickListener(this);
        findViewById(R.id.button2).setOnClickListener(this);
        findViewById(R.id.button3).setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch(v.getId()) {
            case R.id.button1:
                mVib.vibrate(500);
                break;
            case R.id.button2:
                mVib.vibrate(new long[]{100, 50, 200, 50}, 0);
                break;
            case R.id.button3:
                mVib.cancel();
                break;
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mVib.cancel();
    }
}
