package com.example.graduation;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.tabs.TabLayout;

public class Home_myActivity extends AppCompatActivity {
    @Override

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home_my); // 加载布局文件
        // 获取 TabLayout
        TabLayout tabLayout = findViewById(R.id.tabLayout);
        // 添加标签
        tabLayout.addTab(tabLayout.newTab().setText("huodong"));
        tabLayout.addTab(tabLayout.newTab().setText("LOL"));
        tabLayout.addTab(tabLayout.newTab().setText("TFT"));
        tabLayout.addTab(tabLayout.newTab().setText("My"));

        // 设置默认选中标签为 "My"
        tabLayout.getTabAt(3).select();

        // 设置标签点击事件
        tabLayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                // 获取当前点击的标签文本
                String selectedTabText = tab.getText().toString();

                // 根据标签文本进行导航
                if (selectedTabText.equals("huodong")) {// 导航到 Home_huodongActivity
                    tabLayout.selectTab(tab);
                    Intent intent = new Intent(Home_myActivity.this, Home_huodongActivity.class);
                    startActivity(intent);
                    finish();
                } else if (selectedTabText.equals("LOL")) {// 导航到 Home_lolActivity
                    tabLayout.selectTab(tab);
                    Intent intent = new Intent(Home_myActivity.this, Home_lolActivity.class);
                    startActivity(intent);
                    finish();
                } else if (selectedTabText.equals("TFT")) {// 导航到 Home_tftActivity
                    tabLayout.selectTab(tab);
                    Intent intent = new Intent(Home_myActivity.this, Home_tftActivity.class);
                    startActivity(intent);
                    finish();
                }
                else if (selectedTabText.equals("My")) {

                }// 不执行任何操作，因为点击 "My" 标签时不需要导航
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
    public void goToSetup(View view) {  //按钮去satup
        Intent intent = new Intent(Home_myActivity.this, SetupActivity.class);
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