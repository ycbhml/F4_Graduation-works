package com.example.graduation;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.tabs.TabLayout;

public class Home_tftActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home_tft);
        // 获取 TabLayout
        TabLayout tabLayout = findViewById(R.id.tabLayout);
        tabLayout.addTab(tabLayout.newTab().setText("huodon"));
        tabLayout.addTab(tabLayout.newTab().setText("LOL"));
        tabLayout.addTab(tabLayout.newTab().setText("TFT"));
        tabLayout.addTab(tabLayout.newTab().setText("My"));

        // 设置默认选中标签为 "TFT"
        tabLayout.getTabAt(2).select();
        // 设置标签点击事件
        tabLayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                // 获取当前点击的标签文本
                String selectedTabText = tab.getText().toString();

                if (selectedTabText.equals("huodon")) {// 如果点击的是 "huodon" 标签，则导航至 Home_huodongActivity
                    tabLayout.selectTab(tab);
                    Intent intent1 = new Intent(Home_tftActivity.this, Home_huodongActivity.class);
                    startActivity(intent1);
                    finish();
                } else if (selectedTabText.equals("LOL")) {// 如果点击的是 "LOL" 标签，则导航至 Home_LOLActivity
                    tabLayout.selectTab(tab);
                    Intent intent2 = new Intent(Home_tftActivity.this, Home_lolActivity.class);
                    startActivity(intent2);
                    finish();
                }
                else if (selectedTabText.equals("My")) {// 如果点击的是 "My" 标签，则导航至 Home_myActivity
                    tabLayout.selectTab(tab);
                    Intent intent3 = new Intent(Home_tftActivity.this, Home_myActivity.class);
                    startActivity(intent3);
                    finish();
                }
                else {
                    // 如果点击的是 "TFT" 标签，则不执行任何操作
                }

            }
            @Override
            public void onTabUnselected(TabLayout.Tab tab) {
                // 当标签未被选中时的操作
            }
            @Override
            public void onTabReselected(TabLayout.Tab tab) {
                // 当标签被重新选中时的操作
            }
        });
    }
}
//public void goTomy(View view) {
//        Intent intent = new Intent(this, Home_myActivity.class);
//        startActivity(intent);
//        finish();
//        }
//public void goTolol(View view) {
//        Intent intent = new Intent(this, Home_lolActivity.class);
//        startActivity(intent);
//        finish();
//        }
//public void goTohuodong(View view) {
//        Intent intent = new Intent(this, Home_huodongActivity.class);
//        startActivity(intent);
//        finish();