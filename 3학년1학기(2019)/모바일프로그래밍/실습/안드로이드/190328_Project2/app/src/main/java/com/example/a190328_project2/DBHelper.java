package com.example.a190328_project2;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteOpenHelper;
import android.database.sqlite.SQLiteDatabase;

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