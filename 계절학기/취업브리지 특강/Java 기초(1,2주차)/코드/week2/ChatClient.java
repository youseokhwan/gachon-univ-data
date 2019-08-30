package javabasic.week2;

import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class ChatClient {

	public static void main(String[] args) {
		try {
			Socket s = new Socket("192.9.83.201", 5000);
			System.out.println("## 클라이언트 실행..");
			
			PrintWriter pw = new PrintWriter(new OutputStreamWriter(s.getOutputStream()));
			
			Scanner scan = new Scanner(System.in);
			System.out.print("Message Input: ");
			String msg = scan.next();
			pw.println("[유석환]" + msg);
			pw.close();
			s.close();
			scan.close();
			System.out.println("## 클라이언트 종료..");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
