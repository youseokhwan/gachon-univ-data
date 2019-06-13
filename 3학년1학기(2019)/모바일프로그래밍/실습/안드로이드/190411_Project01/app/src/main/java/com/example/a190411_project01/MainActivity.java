package com.example.a190411_project01;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity implements View.OnClickListener {
    Button product, addrbook;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        product = (Button)findViewById(R.id.btnProduct);
        addrbook = (Button)findViewById(R.id.btnAddrbook);

        product.setOnClickListener((View.OnClickListener)this);
        addrbook.setOnClickListener((View.OnClickListener)this);
    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.btnProduct) {
            Intent intent = new Intent(this, Product.class);
            startActivity(intent);
        }
        else if(v.getId() == R.id.btnAddrbook) {
            Intent intent = new Intent(this, AddrBook.class);
            startActivity(intent);
        }
        else {
            finish();
        }
    }
}
