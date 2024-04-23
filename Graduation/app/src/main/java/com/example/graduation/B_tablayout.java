package com.example.graduation;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.viewpager2.adapter.FragmentStateAdapter;
import androidx.viewpager2.widget.ViewPager2;
import com.google.android.material.tabs.TabLayout;
import com.google.android.material.tabs.TabLayoutMediator;

public class B_tablayout extends AppCompatActivity {

    private ViewPager2 viewPager;
    private TabLayout tabLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.b_tablayout);

        viewPager = findViewById(R.id.view_pager);
        tabLayout = findViewById(R.id.tabLayout);
        viewPager.setAdapter(new ScreenSlidePagerAdapter(this));

        new TabLayoutMediator(tabLayout, viewPager, (tab, position) -> {
            switch (position) {
                case 0:
                    tab.setText("Event");
                    //tab.setIcon(R.drawable.ic_activity); // Assume you have an icon named ic_activity
                    break;
                case 1:
                    tab.setText("LOL");
                    //tab.setIcon(R.drawable.ic_lol);
                    break;
                case 2:
                    tab.setText("TFT");
                    //tab.setIcon(R.drawable.ic_tft);
                    break;
                case 3:
                    tab.setText("My");
                    //tab.setIcon(R.drawable.ic_my);
                    break;
            }
        }).attach();
    }

    private class ScreenSlidePagerAdapter extends FragmentStateAdapter {
        public ScreenSlidePagerAdapter(AppCompatActivity fa) {
            super(fa);
        }

        @Override
        public Fragment createFragment(int position) {
            switch (position) {
                case 0: return new D_eventFragment();
                case 1: return new D_lolFragment();
                case 2: return new D_tftFragment();
                case 3: return new D_myFragment();
                default: return null;
            }
        }

        @Override
        public int getItemCount() {
            return 4; // Total number of pages.
        }
    }
}