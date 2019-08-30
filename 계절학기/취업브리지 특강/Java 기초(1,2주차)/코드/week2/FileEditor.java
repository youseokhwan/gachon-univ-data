package javabasic.week2;

import java.io.*;
import java.util.Scanner;

public class FileEditor {

	public static void main(String[] args) {
		System.out.println("## 간단 메모장 v1.0 ##");
		System.out.print("## 저장할 파일명: ");
		Scanner scan = new Scanner(System.in);
		String filename = scan.next();
		System.out.println("## 저장은 마지막 라인에 q 입력");
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		try {
			BufferedWriter writer = new BufferedWriter(new FileWriter("/Users/youseokhwan/Dev/" + filename));
			
			String s;
			while(!(s = reader.readLine()).equals("q")) {
				writer.write(s + "\r\n");
			}
			reader.close();
			writer.close();
			scan.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		System.out.println("## 파일이 저장되었습니다. 프로그램을 종료합니다!");
	}

}
