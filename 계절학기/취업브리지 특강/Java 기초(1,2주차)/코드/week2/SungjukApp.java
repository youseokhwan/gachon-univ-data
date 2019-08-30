package javabasic.week2;

public class SungjukApp {

	public static void main(String[] args) {
		Student student1 = new Student(1, "가가가", 10, 20, 30, 40, 50);
		Student student2 = new Student(2, "나나나", 12, 28, 61, 11, 20);
		Student student3 = new Student(3, "다다다", 5, 88, 22, 13, 25);
		
		student1.printStudent();
		student2.printStudent();
		student3.printStudent();
	}

}
