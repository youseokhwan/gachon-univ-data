package com.example.a190328_project2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.text.SimpleDateFormat;
import java.util.Date;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final DBHelper dbHelper = new DBHelper(getApplicationContext(),"MoneyBook.db",null,1);

        final TextView result =(TextView) findViewById(R.id.result);
        final EditText etDATE =(EditText) findViewById(R.id.date);
        final EditText etItem = (EditText) findViewById(R.id.item);
        final EditText etPrice = (EditText) findViewById(R.id.price);

        final EditText etAmount = (EditText) findViewById(R.id.amount);
        final EditText etTotal = (EditText) findViewById(R.id.total);

        Long now = System.currentTimeMillis();
        Date date = new Date(now);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy년 MM월 dd일");
        etDATE.setText(simpleDateFormat.format(date));

        //추가
        Button insert = (Button)findViewById(R.id.insert);
        insert.setOnClickListener(new View.OnClickListener() { //insert 버튼을 클릭하였을 때
            @Override
            public void onClick(View v) {
                String date = etDATE.getText().toString();
                String item = etItem.getText().toString();
                int price = Integer.parseInt(etPrice.getText().toString());
                int amount = Integer.parseInt(etAmount.getText().toString());
                int total = price * amount;

                dbHelper.insert(date, item, total);
                result.setText(dbHelper.getResult());

                etTotal.setText(String.valueOf(total));
            }
        });

        //수정
        Button update =(Button)findViewById(R.id.update);
        update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String item = etItem.getText().toString();
                int price = Integer.parseInt(etPrice.getText().toString());
                int amount = Integer.parseInt(etAmount.getText().toString());
                int total = price * amount;

                dbHelper.update(item, total);
                result.setText(dbHelper.getResult());
            }
        });

        //삭제
        Button delete = (Button)findViewById(R.id.delete);
        delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String item = etItem.getText().toString();
                dbHelper.delete(item);
                result.setText(dbHelper.getResult());
            }
        });

        //검색
        Button select = (Button)findViewById(R.id.select);
        select.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                result.setText(dbHelper.getResult());
            }
        });
    }
}