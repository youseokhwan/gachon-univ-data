package com.example.a190509_project01;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Vibrator;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.io.DataOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;

public class MainActivity extends AppCompatActivity  {
    SensorManager sm;
    SensorEventListener accL; // 자이로
    SensorEventListener oriL; // 가속도
    Sensor oriSensor;
    Sensor accSensor;
    TextView ax, ay, az; // 자이로
    TextView ox, oy, oz; // 가속도
    TextView mDistance;
    TextView mSteps;
    EditText editShakeHold;
    Button btnReset;
    ArrayList<Float> SensorX = new ArrayList<>();
    ArrayList<Float> SensorY = new ArrayList<>();
    ArrayList<Float> SensorZ = new ArrayList<>();

    Button connectBtn;
    EditText ip_EditText;
    EditText port_EditText;

    SocketClient client;        // 서버접속을 위한 클라이언트클래스
    SendThread send;            // 안드로이드에서 임의의 문자 보내는것
    Socket socket;
    LinkedList<SocketClient> threadList;

    private long lastTime = 0;
    private float speed = 0;

    private float lastX = 0;
    private float lastY = 0;
    private float lastZ = 0;

    private float x, y, z;
    private int SHAKE_THRESHOLD = 800;

    private int StepCount = 0;

    Vibrator mVib;

    @Override
    protected void onCreate(Bundle savedInstanceState) { // 최초 생성시
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
        editShakeHold = (EditText)findViewById(R.id.editShakeHold);
        btnReset = (Button)findViewById(R.id.btnReset);
        mVib = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);

        ip_EditText = (EditText) findViewById(R.id.ip_EditText);
        port_EditText = (EditText) findViewById(R.id.port_EditText);
        connectBtn = (Button) findViewById(R.id.connect_Button);
        threadList = new LinkedList<MainActivity.SocketClient>();

        // 연결버튼 클릭 이벤트
        connectBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View arg0) {
                //Client 연결부
                client = new SocketClient(ip_EditText.getText().toString(),
                        port_EditText.getText().toString());// 클라이언트 소켓 오픈
                threadList.add(client); // 스레드 리스트에 추가
                client.start(); // 클라이언트 시작
            }
        });

        btnReset.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View arg0) {
                //Client 연결부
                String str;
                StepCount = 0;
                str = String.format("%d", StepCount);
                mSteps.setText(str+"걸음");
            }
        });

    }  @Override
    public void onResume() { // 일시 중지된 상태에서 액티비티로 다시 onResume() 실행
        super.onResume();

        sm.registerListener(accL, accSensor, SensorManager.SENSOR_DELAY_NORMAL);
        sm.registerListener(oriL, oriSensor, SensorManager.SENSOR_DELAY_NORMAL);
    }

    @Override
    public void onPause() { // 액티비티가 일시 중지했을 때 호출
        super.onPause();

        sm.unregisterListener(oriL);
        sm.unregisterListener(accL);
    }


    private class accListener implements SensorEventListener { // 자이로 센서 값이 바뀔떄마다 호출해주는곳
        public void onSensorChanged(SensorEvent event) {
            ax.setText(Float.toString(event.values[0]));
            ay.setText(Float.toString(event.values[1]));
            az.setText(Float.toString(event.values[2]));
            Log.i("SENSOR", "Acceleration changed.");
            Log.i("SENSOR", "  Acceleration X: " + event.values[0]
                    + ", Acceleration Y: " + event.values[1]
                    + ", Acceleration Z: " + event.values[2]);

            try{
                SHAKE_THRESHOLD = Integer.parseInt(editShakeHold.getText().toString());
            }
            catch (Exception e)
            {
                return;
            }

            long currentTime = System.currentTimeMillis();
            long gabOfTime = (currentTime - lastTime);
            int count;
            long cal;
            String str;
            String str3 = String.format("%d", currentTime) + " " + String.format("%d", lastTime);
            mDistance.setText(str3);

            if(gabOfTime > 100) {
                lastTime = currentTime;
                x = event.values[0];
                y = event.values[1];
                z = event.values[2];

                speed = Math.abs(x+y+z - lastX - lastY - lastZ) / gabOfTime * 10000;
                if(speed > SHAKE_THRESHOLD){
                    StepCount++;
                    str = String.format("%d", StepCount);
                    mSteps.setText(str+"걸음");
                }

                lastX = event.values[0];
                lastY = event.values[1];
                lastZ = event.values[2];


                if(SensorX.isEmpty())
                {
                    SensorX.add(event.values[0]);
                    SensorY.add(event.values[0]);
                    SensorZ.add(event.values[0]);
                    return;
                }

                int averX = 0;
                int averY = 0;
                int averZ = 0;
                Iterator<Float> iter;

                iter = SensorX.iterator();
                count = 0;
                while (iter.hasNext())
                {
                    averX += iter.next();
                    count++;
                }
                averX = averX / count;

                iter = SensorY.iterator();
                count = 0;
                while (iter.hasNext())
                {
                    averY += iter.next();
                    count++;
                }
                averY = averY / count;

                iter = SensorZ.iterator();
                count = 0;
                while (iter.hasNext())
                {
                    averZ += iter.next();
                    count++;
                }
                averZ = averZ / count;

                if(5 < Math.abs(event.values[0] - averX) && 5 < Math.abs(event.values[1] - averY) && 5 < Math.abs(event.values[2] - averZ))
                {
                    mVib.vibrate(1000);
                    Toast.makeText(MainActivity.this, "넘어짐", Toast.LENGTH_SHORT).show();
                }

                SensorX.add(event.values[0]);
                SensorY.add(event.values[1]);
                SensorZ.add(event.values[2]);

                if(SensorX.size() > 10)
                    SensorX.remove(0);
                if(SensorY.size() > 10)
                    SensorY.remove(0);
                if(SensorZ.size() > 10)
                    SensorZ.remove(0);
            }

            send = new SendThread(socket); // 전송 스레드 시작
            send.start();
            // if(event.values[0] > 7)
            // Toast.makeText(MainActivity.this, "UP", Toast.LENGTH_SHORT).show();

        }

        public void onAccuracyChanged(Sensor sensor, int accuracy) {
        }
    }

    private class oriListener implements SensorEventListener { // 가속도 센서 값이 바뀔때마다 호출해주는곳
        public void onSensorChanged(SensorEvent event) {
            ox.setText(Float.toString(event.values[0]));
            oy.setText(Float.toString(event.values[1]));
            oz.setText(Float.toString(event.values[2]));
            Log.i("SENSOR", "Orientation changed.");
            Log.i("SENSOR", "  Orientation X: " + event.values[0]
                    + ", Orientation Y: " + event.values[1]
                    + ", Orientation Z: " + event.values[2]);
        }

        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }
    }

    class SocketClient extends Thread {
        boolean threadAlive;
        String ip;
        String port;

        DataOutputStream output = null;

        public SocketClient(String ip, String port) {
            threadAlive = true;
            this.ip = ip;
            this.port = port;
        }

        @Override
        public void run() {

            try {
                // 연결후 바로 ReceiveThread 시작
                socket = new Socket(ip, Integer.parseInt(port)); //ip주소와 port로 연결 (ip는 string, port 는 integer)
                output = new DataOutputStream(socket.getOutputStream()); // 출력 스트림 오픈
                //receive = new ReceiveThread(socket); // 수신 스레드 시작
                //receive.run();
                // receive.start();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


    class SendThread extends Thread {
        Socket socket;
        // String sendmsg = editText_massage.getText().toString() + "\n"; // 메세지 내용 가져옴

        String sendmsg = Integer.toString((int)lastX) + " " + Integer.toString((int)lastY);
        //DataOutputStream output;
        PrintWriter socket_out;

        public SendThread(Socket socket) {
            this.socket = socket;
            try {
                // output = new DataOutputStream(socket.getOutputStream()); // 데이터 출력 스트림 오픈
                socket_out = new PrintWriter(socket.getOutputStream(), true);
            } catch (Exception e) {
            }
        }
        @Override
        public void run() {

            try {
                // 메세지 전송부
                Log.d(ACTIVITY_SERVICE, "11111");

                //if (output != null) {
                if (sendmsg != null) {
                    //sendmsg += "\n";
                    //output.write(sendmsg.getBytes()); // 바이트를 출력 스트림으로 씀, 즉 전송
                    socket_out.println(sendmsg);
                }
                //}
                //  } catch (IOException e) {
                //    e.printStackTrace();
            } catch (NullPointerException npe) {
                npe.printStackTrace();

            }
        }
    }

}
