package com.example.a190321_project04;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class intentfirst extends Activity implements View.OnClickListener {
    Button button3, button4;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.intentfirst);

        button3 = (Button)findViewById(R.id.button3);
        button4 = (Button)findViewById(R.id.button4);

        button3.setOnClickListener(this);
        button4.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.button3) {
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
        }
        else {
            finish();
        }
    }
}
