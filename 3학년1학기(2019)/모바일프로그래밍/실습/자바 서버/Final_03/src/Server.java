import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) {
        ServerSocket serverSocket;
        Socket socket;

        try {
            serverSocket = new ServerSocket(90);
            socket = serverSocket.accept();
            System.out.println("서버 연결됨");

            BufferedReader ain = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            while(true) {
                String str = ain.readLine();
                String ar[] = str.split(" ");

                System.out.println(ar[0]);
                System.out.println(ar[1]);
                System.out.println(ar[2]);
            }

        } catch (Exception e) { }
    }
}
