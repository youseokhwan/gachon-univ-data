package javabasic.week2;

public class AssaultRifle extends Gun {
	@Override
	public void fire() {
		bulletCount -= 5;
		System.out.printf("%s => => => => => , %d\n", this.model, this.bulletCount);
	}
	
	public AssaultRifle(String model) {
		super(model);
		this.bulletCount = 40;
	}
	
}
