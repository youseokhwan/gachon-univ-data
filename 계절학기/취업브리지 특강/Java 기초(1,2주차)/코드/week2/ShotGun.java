package javabasic.week2;

public class ShotGun extends Gun {
	@Override
	public void fire() {
		this.bulletCount -= 1;
		System.out.printf("%s =}}} , %d\n", this.model, this.bulletCount);
	}
	
	public ShotGun(String model) {
		super(model);
	}
	
}
