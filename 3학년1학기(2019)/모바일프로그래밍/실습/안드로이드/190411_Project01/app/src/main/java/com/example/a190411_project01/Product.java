package com.example.a190411_project01;

import android.app.Activity;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Product extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.product);

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

    public class DBHelper extends SQLiteOpenHelper {

        public DBHelper(Context context, String name, SQLiteDatabase.CursorFactory factory, int version) {
            super(context, name, factory, version);
        }

        @Override
        public void onCreate(SQLiteDatabase db) {
            db.execSQL("CREATE TABLE MONEYBOOK(_id INTEGER PRIMARY KEY AUTOINCREMENT, item Text, price Integer, create_at TEXT);");
        }

        @Override
        public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        }

        public void insert(String create_at, String item, int price) {
            SQLiteDatabase db = getWritableDatabase();
            db.execSQL("INSERT INTO MONEYBOOK VALUES(null,'"+item+"',"+price+",'"+create_at+"');");
            db.close();
        }

        public void update(String item, int price) {
            SQLiteDatabase db = getWritableDatabase();
            db.execSQL("UPDATE MONEYBOOK SET price="+price+" WHERE item='"+item+"';");
            db.close();
        }

        public void delete(String item) {
            SQLiteDatabase db = getWritableDatabase();
            db.execSQL("DELETE FROM MONEYBOOK WHERE item='"+item+"';");
            db.close();
        }

        public String getResult() {
            SQLiteDatabase db = getWritableDatabase();
            String result = "";
            Cursor cursor = db.rawQuery("SELECT * FROM MONEYBOOK", null);
            while(cursor.moveToNext()){
                result += cursor.getString(0)
                        + ":"
                        + cursor.getString(1)
                        + "|"
                        + cursor.getInt(2)
                        + "원"
                        + cursor.getString(3)
                        + "\n";
            }
            return result;
        }
    }
}