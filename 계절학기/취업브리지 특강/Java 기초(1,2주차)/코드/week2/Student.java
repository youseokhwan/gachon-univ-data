package javabasic.week2;

public class Student {
	private int id;
	private String name;
	private Sungjuk sungjuk;
	
	public Student(int id, String name, int c, int cpp, int java, int python, int html) {
		this.id = id;
		this.name = name;
		this.sungjuk = new Sungjuk(c, cpp, java, python, html);
	}
	
	public void printStudent() {
		System.out.println("학번: " + this.getId() + ", 이름: " + this.getName());
		this.sungjuk.printSungjuk();
		System.out.println();
	}
	
	public int getId() {
		return this.id;
	}
	
	public String getName() {
		return this.name;
	}
}
