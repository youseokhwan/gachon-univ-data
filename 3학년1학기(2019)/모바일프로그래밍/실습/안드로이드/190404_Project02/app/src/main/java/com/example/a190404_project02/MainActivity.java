package com.example.a190404_project02;

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
    TextView mDistance, mSteps, mCal;

    private long lastTime;
    private float speed;

    private float lastX;
    private float lastY;
    private float lastZ;

    private float x, y, z;
    private static final int SHAKE_THRESHOLD = 800;

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

        mSteps = (TextView)findViewById(R.id.mSteps);
        mDistance = (TextView)findViewById(R.id.mDistance);
        mCal = (TextView)findViewById(R.id.mCal);
    }

    @Override
    protected void onResume() {
        super.onResume();
        sm.registerListener(accL, accSensor, SensorManager.SENSOR_DELAY_NORMAL);
        sm.registerListener(oriL, oriSensor, SensorManager.SENSOR_DELAY_NORMAL);
    }

    @Override
    protected void onPause() {
        super.onPause();
        sm.unregisterListener(accL);
        sm.unregisterListener(oriL);
    }

    private class accListener implements SensorEventListener {
        int count = 0;
        float cal = 0.0f;

        @Override
        public void onSensorChanged(SensorEvent event) {
            long currentTime = System.currentTimeMillis();
            long gabOfTime = (currentTime - lastTime);
            String str;
            String str3 = String.format("%d", currentTime) + " " + String.format("%d", lastTime);

            mDistance.setText(str3);
            if(gabOfTime > 100) {
                lastTime = currentTime;
                x = event.values[0];
                y = event.values[1];
                z = event.values[2];
                speed = Math.abs(x + y + z - lastX - lastY - lastZ) / gabOfTime * 10000;

                if(speed > SHAKE_THRESHOLD) {
                    count++;
                    str = String.format("%d", count);
                    mSteps.setText(str + "걸음");
                    cal = 5.5f * 70 * count / 1000;
                    mCal.setText(cal + "kcal");
                }

                lastX = event.values[0];
                lastY = event.values[1];
                lastZ = event.values[2];

                ax.setText(Float.toString(event.values[0]));
                ay.setText(Float.toString(event.values[1]));
                az.setText(Float.toString(event.values[2]));

                Log.i("SENSOR", "Acceleration changed");
                Log.i("SENSOR", "Acceleration X: " + event.values[0]
                                    + ", Acceleration Y: " + event.values[1]
                                    + ", Acceleration Z: " + event.values[2]);
            }
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }
    }

    private class oriListener implements SensorEventListener {
        @Override
        public void onSensorChanged(SensorEvent event) {
            ox.setText(Float.toString(event.values[0]));
            oy.setText(Float.toString(event.values[1]));
            oz.setText(Float.toString(event.values[2]));

            Log.i("SENSOR", "Orientation changed");
            Log.i("SENSOR", "Orientation X: " + event.values[0]
                                + "Orientation Y: " + event.values[1]
                                + "Orientation Z: " + event.values[2]);
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }
    }
}
