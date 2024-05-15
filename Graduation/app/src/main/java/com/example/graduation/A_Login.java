package com.example.graduation;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

public class A_Login extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.a_login);
    }
    public void goToHome(View view) {  //按钮去B_tablayout
        Intent intent = new Intent(this, B_tablayout.class);
        startActivity(intent);
        finish();
    }
}