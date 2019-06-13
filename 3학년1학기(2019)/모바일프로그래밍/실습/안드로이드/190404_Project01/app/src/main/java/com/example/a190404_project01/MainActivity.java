package com.example.a190404_project01;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    SensorManager sm;
    SensorEventListener accL;
    SensorEventListener oriL;
    Sensor oriSensor;
    Sensor accSensor;
    TextView ax, ay, az;
    TextView ox, oy, oz;

    @Override
    protected void onResume() {
        // 일시 중지된 상태에서 액티비티로 돌아오면 호출
        super.onResume();
        sm.registerListener(accL, accSensor, SensorManager.SENSOR_DELAY_NORMAL);
        sm.registerListener(oriL, oriSensor, SensorManager.SENSOR_DELAY_NORMAL);
    }

    @Override
    protected void onPause() {
        // 액티비티가 일시 중지됐을 때 호출
        super.onPause();
        sm.unregisterListener(oriL);
        sm.unregisterListener(accL);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sm = (SensorManager)getSystemService(SENSOR_SERVICE);
        oriSensor = sm.getDefaultSensor(Sensor.TYPE_ORIENTATION);
        accSensor = sm.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
        oriL = new oriListener();
        accL = new accListener();
        ax = (TextView)findViewById(R.id.acc_x);
        ay = (TextView)findViewById(R.id.acc_y);
        az = (TextView)findViewById(R.id.acc_z);
        ox = (TextView)findViewById(R.id.ori_x);
        oy = (TextView)findViewById(R.id.ori_y);
        oz = (TextView)findViewById(R.id.ori_z);
    }

    private class accListener implements SensorEventListener {
        @Override
        public void onSensorChanged(SensorEvent event) {
            ax.setText(Float.toString(event.values[0]));
            ay.setText(Float.toString(event.values[1]));
            az.setText(Float.toString(event.values[2]));
            Log.i("SENSOR", "Acceleration changed");
            Log.i("SENSOR", "Acceleration X: " + event.values[0]
                                + ", Acceleration Y: " + event.values[1]
                                + ", Acceleration Z: " + event.values[2]);
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }
    }

    private class oriListener implements SensorEventListener {
        @Override
        public void onSensorChanged(SensorEvent event) {
            // 방향센서 바뀔 때마다 호출하는 메소드
            ox.setText(Float.toString(event.values[0]));
            oy.setText(Float.toString(event.values[1]));
            oz.setText(Float.toString(event.values[2]));
            Log.i("Sensor", "Orientation changed");
            Log.i("Sensor", "Orientation X: " + event.values[0]
                                + ", Orientation Y: " + event.values[1]
                                + ", Orientation Z: " + event.values[2]);
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }
    }
}
