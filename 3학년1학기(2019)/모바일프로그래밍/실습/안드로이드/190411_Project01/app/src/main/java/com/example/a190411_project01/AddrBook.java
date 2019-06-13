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

public class AddrBook extends Activity {
    EditText edtSearch, edtName, edtPhone, edtAddr, edtResult;
    Button btnAdd, btnDelete, btnSelect, btnUpdate;
    MyDBHelper helper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.addrbook);

        edtSearch = (EditText)findViewById(R.id.edtSearch);
        edtName = (EditText)findViewById(R.id.edtName);
        edtPhone = (EditText)findViewById(R.id.edtPhone);
        edtAddr = (EditText)findViewById(R.id.edtAddr);
        edtResult = (EditText)findViewById(R.id.edtResult);

        btnAdd = (Button)findViewById(R.id.btnAdd);
        btnDelete = (Button)findViewById(R.id.btnDelete);
        btnSelect = (Button)findViewById(R.id.btnSelect);
        btnUpdate = (Button)findViewById(R.id.btnUpdate);

        btnAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SQLiteDatabase db = helper.getWritableDatabase();
                String sql = "insert into phone values(null, ?, ?, ?)";
                String args[] = {edtName.getText().toString()
                        , edtPhone.getText().toString()
                        , edtAddr.getText().toString()};
                db.execSQL(sql, args);
                helper.close();
                edtResult.setText("Insert OK");
            }
        });

        btnDelete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SQLiteDatabase db = helper.getWritableDatabase();
                String name = edtName.getText().toString();
                String sql = "delete from phone where name = ?";
                db.execSQL(sql, new String[] {name});
                edtResult.setText("Delete OK");
                helper.close();
            }
        });

        btnSelect.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SQLiteDatabase db = helper.getWritableDatabase();
                String search = edtSearch.getText().toString();
                String sql = "select * from phone where name=?";
                Cursor cursor = db.rawQuery(sql, new String[] {search});
                StringBuffer sb = new StringBuffer();
                while (cursor.moveToNext()) {
                    int num = cursor.getInt(0);
                    String name = cursor.getString(1);
                    String phone = cursor.getString(2);
                    String addr = cursor.getString(3);
                    sb.append(num + ", " + name + ", " + phone + ", " + addr + ", " + "\r\n");
                }
                edtResult.setText(sb);
                cursor.close();
                helper.close();
            }
        });

        btnUpdate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SQLiteDatabase db = helper.getWritableDatabase();
                String name = edtName.getText().toString();
                String phone = edtName.getText().toString();
                String addr = edtAddr.getText().toString();
                String sql = "update phone set name = ?, phone = ?, addr = ? where name = ?";
                String args[] = {name, phone, addr, name};
                db.execSQL(sql, args);
                edtResult.setText("Update OK");
                helper.close();
            }
        });

        helper = new MyDBHelper(this);
    }

    class MyDBHelper extends SQLiteOpenHelper {
        public MyDBHelper(Context context) {
            super(context, "phone.db", null, 1);
        }

        @Override
        public void onCreate(SQLiteDatabase db) {
            String sql = "create table phone(" +
                    "num integer primary key autoincrement, " +
                    "name text, phone text, addr text)";
            db.execSQL(sql);
        }

        @Override
        public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
            String sql = "drop table if exists phone";
            db.execSQL(sql);
            onCreate(db);
        }
    }
}
