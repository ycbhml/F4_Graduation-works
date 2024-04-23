package com.example.graduation;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

public class C_my extends AppCompatActivity {
    @Override

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.c_my); // 加载布局文件
    }
    public void goToSetup(View view) {  //按钮去satup
        Intent intent = new Intent(C_my.this, Z_Setup.class);
        startActivity(intent);
        finish();
    }
}
//    public void goTolol(View view) {
//        Intent intent = new Intent(this, Home_lolActivity.class);
//        startActivity(intent);
//        finish();
//    }
//    public void goTotft(View view) {
//        Intent intent = new Intent(this, Home_tftActivity.class);
//        startActivity(intent);
//        finish();
//    }
//    public void goTohuodong(View view) {
//        Intent intent = new Intent(this, Home_huodongActivity.class);
//        startActivity(intent);
//        finish();
//    }
//}