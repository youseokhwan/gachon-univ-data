package javabasic.week2;

public class Gun {
	protected String model;
	protected int bulletCount;
	
	public void fire() {
		System.out.println(this.model + "=>");
		this.bulletCount -= 1;
	}
	
	public Gun(String model) {
		this.bulletCount = 10;
		this.model = model;
	}
	
}
