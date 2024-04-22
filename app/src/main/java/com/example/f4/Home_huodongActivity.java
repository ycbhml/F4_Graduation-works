package com.example.f4;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class Home_huodongActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home_huodong); // 加载布局文件
    }


    public void goTolol(View view) {
        Intent intent = new Intent(this, Home_lolActivity.class);
        startActivity(intent);
        finish();
    }
    public void goTotft(View view) {
        Intent intent = new Intent(this, Home_tftActivity.class);
        startActivity(intent);
        finish();
    }
    public void goTomy(View view) {
        Intent intent = new Intent(this, Home_myActivity.class);
        startActivity(intent);
        finish();
    }
}