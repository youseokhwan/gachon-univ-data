package javabasic.week2;

public abstract class Robot {
	private String name;
	
	void move() {
		System.out.println("Robot moved !!");
		charging(); // 미래에 구현될 코드도 작성 가능
	}
	
	abstract void charging();
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
