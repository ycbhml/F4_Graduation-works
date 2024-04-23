package com.example.graduation;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.view.View;

public class Z_Setup extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.z_setup);
    }

    public void goToHome(View view) {  //按钮去Home_myActivity
        Intent intent = new Intent(this, C_my.class);
        startActivity(intent);
        finish();
    }

    public void goToMain(View view) {  //按钮去Home_myActivity
        Intent intent = new Intent(this, A_Login.class);
        startActivity(intent);
        finish();
    }
}