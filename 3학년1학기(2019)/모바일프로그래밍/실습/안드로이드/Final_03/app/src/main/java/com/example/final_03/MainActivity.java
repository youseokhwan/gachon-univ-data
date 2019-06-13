package com.example.final_03;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import java.io.DataOutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.LinkedList;

public class MainActivity extends AppCompatActivity {

    SensorManager sm;
    SensorEventListener oriListener;
    Sensor oriSensor;

    Button connectBtn;

    SocketClient client;
    SendThread send;
    Socket socket;
    LinkedList<SocketClient> threadList;

    float x, y, z;
    String str;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sm = (SensorManager)getSystemService(SENSOR_SERVICE);
        oriSensor = sm.getDefaultSensor(Sensor.TYPE_ORIENTATION);
        oriListener = new oriListener();

        sm.registerListener(oriListener, oriSensor, SensorManager.SENSOR_DELAY_NORMAL);

        connectBtn = (Button)findViewById(R.id.connectBtn);
        threadList = new LinkedList<SocketClient>();

        connectBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                client = new SocketClient();
                threadList.add(client);
                client.start();
            }
        });
    }

    private class oriListener implements SensorEventListener {
        @Override
        public void onSensorChanged(SensorEvent event) {
            x = event.values[0];
            y = event.values[1];
            z = event.values[2];

            str = Float.toString(x) + " " + Float.toString(y) + " "
                    + Float.toString(z);

            send = new SendThread(socket);
            send.start();
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) { }
    }

    class SocketClient extends Thread {

        DataOutputStream output;

        @Override
        public void run() {
            try {
                socket = new Socket("192.168.219.102", 90);
                output = new DataOutputStream(socket.getOutputStream());
            }
            catch (Exception e) { }
        }
    }

    class SendThread extends Thread {
        Socket socket;
        String sendmsg = str;
        PrintWriter socket_out;

        public SendThread(Socket socket) {
            this.socket = socket;
            try {
                socket_out = new PrintWriter(socket.getOutputStream(), true);
            } catch (Exception e) { }
        }

        @Override
        public void run() {
            try {
                if(sendmsg != null) {
                    socket_out.println(sendmsg);
                }
            } catch (Exception e) { }
        }
    }
}
