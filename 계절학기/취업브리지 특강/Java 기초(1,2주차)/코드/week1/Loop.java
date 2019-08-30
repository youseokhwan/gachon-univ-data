package javabasic.week1;

import java.util.Arrays;

public class Loop {

	public static void main(String[] args) {
		int power = 13;
		String members[] = {"홍길동", "김길동", "김사랑", "아무개"};
		
		for(int i = 0; i < 10; i++) {
			System.out.println(i);
		}
		
		for(int i = 0; i < members.length; i++) {
			System.out.println(members[i]);
		}
		
		for(String name : members) {
			System.out.println(name);
		}
		
		// 새로운 구문(함수형 프로그래밍, 람다식 등)
		Arrays.asList(members).forEach(s -> System.out.println(s)); // 람다 익스프레션
		Arrays.asList(members).forEach(System.out::println);
		
		while(power > 10) {
			System.out.println("go");
			power--;
		}
		System.out.println("stop");
	}

}
