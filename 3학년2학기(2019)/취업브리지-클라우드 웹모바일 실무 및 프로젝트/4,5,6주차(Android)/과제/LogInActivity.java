package com.example.gachonmusic;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class LogInActivity extends Activity implements View.OnClickListener {

    EditText edt_email, edt_password;
    CheckBox chk_autologin;
    Button btn_login;
    TextView text_signup, text_findid;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        edt_email = (EditText)findViewById(R.id.edt_email);
        edt_password = (EditText)findViewById(R.id.edt_password);
        chk_autologin = (CheckBox)findViewById(R.id.chk_autologin);
        btn_login = (Button) findViewById(R.id.btn_login);
        text_signup = (TextView) findViewById(R.id.text_signup);
        text_findid = (TextView) findViewById(R.id.text_findid);

        btn_login.setOnClickListener(this);
        chk_autologin.setOnClickListener(this);
        text_signup.setOnClickListener(this);
        text_findid.setOnClickListener(this);
    }

    @Override
    protected void onResume() {
        super.onResume();

        edt_email.setText("");
        edt_password.setText("");
        chk_autologin.setChecked(false);
    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.btn_login) {
            String email = edt_email.getText().toString();
            String password = edt_password.getText().toString();

            if(email.equals("") || password.equals("")) {
                Toast.makeText(this, "입력되지 않은 항목이 있습니다.", Toast.LENGTH_LONG).show();
            }
            else {
                Toast.makeText(this, email + "님 환영합니다!", Toast.LENGTH_SHORT).show();

                Intent intent = new Intent(this, MainActivity.class);
                intent.putExtra("email", email);
                startActivity(intent);
            }
        }
        else if(v.getId() == R.id.chk_autologin) {
            Toast.makeText(this, "자동 로그인 기능은 구현 예정입니다.", Toast.LENGTH_SHORT).show();

        }
        else if(v.getId() == R.id.text_signup) {
            Intent intent = new Intent(this, SignUpActivity.class);
            startActivity(intent);
        }
        else if(v.getId() == R.id.text_findid) {
            Toast.makeText(this, "ID/PW 찾기 기능은 구현 예정입니다.", Toast.LENGTH_SHORT).show();
        }
    }

}
