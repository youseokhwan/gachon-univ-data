package javabasic.week2;

public class GunGame {

	public static void main(String[] args) {
		Gun gun1 = new ShotGun("S12K");
		Gun gun2 = new AssaultRifle("M416");
		
		gun1.fire();
		gun2.fire();
	}

}
