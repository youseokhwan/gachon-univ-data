import paho.mqtt.client as mqtt
import paho.mqtt.publish as publish
import time

normal_temp = 30.0  # 원하는 온도 설정
MQTT_Broker = "192.9.113.218"  # 자신의 PC(Broker) IP


def on_connect(client, userdata, flags, rc):
    print("Connect with result code" + str(rc))
    client.subscribe("dht/CCL")  # Topic
	
	
def on_message(client, userdata, msg):
    x = str(msg.payload.decode('utf-8'))  # dht 센서 데이터
    print(msg.topic + " " + x)
    y = eval(x)  # dht 센서 데이터를 Dic타입으로 변환 파싱

    if y["pir"] == "움직임이 감지됨!":
        publish.single("dht/CCL", "Camera On!", hostname = MQTT_Broker)
        return
 
    if y["temperature"] > normal_temp:
        publish.single("dht/CCL", "비상등을 켜세요", hostname = MQTT_Broker)
		
    elif y["temperature"] <= normal_temp:
        publish.single("dht/CCL", "비상등을 끄세요", hostname = MQTT_Broker)
  
		

def on_publish(client, userdata, mid):
    print("message publish ...")
	
	
def on_disconnect(client, userdata, rc):
    print("Disconnected")
	
	
client = mqtt.Client()
client.on_connect = on_connect
client.connect(MQTT_Broker, 1883, 60)
client.on_message = on_message
client.on_publish = on_publish
client.on_disconnect = on_disconnect
client.loop_forever()



