package com.example.gachonmusic;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.Toast;

public class SignUpActivity extends Activity implements View.OnClickListener, SeekBar.OnSeekBarChangeListener {

    EditText edt_email, edt_password, edt_password2;
    RadioButton radio_male, radio_female;
    TextView text_age, text_cancel;
    SeekBar seekbar_age;
    CheckBox chk_none, chk_rnb, chk_dance, chk_hiphop, chk_ballad, chk_rock;
    Button btn_signup;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        edt_email = (EditText)findViewById(R.id.edt_email);
        edt_password = (EditText)findViewById(R.id.edt_password);
        edt_password2 = (EditText)findViewById(R.id.edt_password2);
        radio_male = (RadioButton)findViewById(R.id.radio_male);
        radio_female = (RadioButton)findViewById(R.id.radio_female);
        text_age = (TextView)findViewById(R.id.text_age);
        text_cancel = (TextView)findViewById(R.id.text_cancel);
        seekbar_age = (SeekBar)findViewById(R.id.seekbar_age);
        chk_none = (CheckBox)findViewById(R.id.chk_none);
        chk_rnb = (CheckBox)findViewById(R.id.chk_rnb);
        chk_dance = (CheckBox)findViewById(R.id.chk_dance);
        chk_hiphop = (CheckBox)findViewById(R.id.chk_hiphop);
        chk_ballad = (CheckBox)findViewById(R.id.chk_ballad);
        chk_rock = (CheckBox)findViewById(R.id.chk_rock);
        btn_signup = (Button)findViewById(R.id.btn_signup);

        seekbar_age.setOnSeekBarChangeListener(this);
        chk_none.setOnClickListener(this);
        chk_rnb.setOnClickListener(this);
        chk_dance.setOnClickListener(this);
        chk_hiphop.setOnClickListener(this);
        chk_ballad.setOnClickListener(this);
        chk_rock.setOnClickListener(this);
        btn_signup.setOnClickListener(this);
        text_cancel.setOnClickListener(this);

        radio_male.setChecked(true);
        chk_none.setChecked(true);
    }

    @Override
    protected void onResume() {
        super.onResume();

        edt_email.setText("");
        edt_password.setText("");
        edt_password2.setText("");
        radio_male.setChecked(true);
        seekbar_age.setProgress(19);
        chk_none.setChecked(true);
    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.chk_none) {
            chk_rnb.setChecked(false);
            chk_dance.setChecked(false);
            chk_hiphop.setChecked(false);
            chk_ballad.setChecked(false);
            chk_rock.setChecked(false);
        }
        else if(v.getId() == R.id.chk_rnb) {
            chk_none.setChecked(false);
        }
        else if(v.getId() == R.id.chk_dance) {
            chk_none.setChecked(false);
        }
        else if(v.getId() == R.id.chk_hiphop) {
            chk_none.setChecked(false);
        }
        else if(v.getId() == R.id.chk_ballad) {
            chk_none.setChecked(false);
        }
        else if(v.getId() == R.id.chk_rock) {
            chk_none.setChecked(false);
        }
        else if(v.getId() == R.id.btn_signup) {
            String email = edt_email.getText().toString();
            String password = edt_password.getText().toString();
            String password2 = edt_password2.getText().toString();
            boolean none = chk_none.isChecked();
            boolean rnb = chk_rnb.isChecked();
            boolean dance = chk_dance.isChecked();
            boolean hiphop = chk_hiphop.isChecked();
            boolean ballad = chk_ballad.isChecked();
            boolean rock = chk_rock.isChecked();

            if(email.equals("") || password.equals("") || password2.equals("") ||
                    !(none || rnb || dance || hiphop || ballad || rock)) {
                Toast.makeText(this, "입력되지 않은 항목이 있습니다.", Toast.LENGTH_LONG).show();
            }
            else if(!password.equals(password2)) {
                Toast.makeText(this, "비밀번호가 일치하지 않습니다.", Toast.LENGTH_LONG).show();
            }
            else {
                Toast.makeText(this, "회원가입이 완료되었습니다.", Toast.LENGTH_LONG).show();

                Intent intent = new Intent(this, LogInActivity.class);
                startActivity(intent);
            }
        }
        else if(v.getId() == R.id.text_cancel) {
            finish();
        }
    }

    @Override
    public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
        text_age.setText(progress + "세");
    }

    @Override
    public void onStartTrackingTouch(SeekBar seekBar) {

    }

    @Override
    public void onStopTrackingTouch(SeekBar seekBar) {

    }
}
