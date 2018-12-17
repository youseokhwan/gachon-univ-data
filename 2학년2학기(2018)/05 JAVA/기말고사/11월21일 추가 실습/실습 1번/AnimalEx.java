
public class AnimalEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Animal animal = new Animal();
		Dog dog = new Dog();
		Cat cat = new Cat();
		
		Animal obj;
		obj = animal;
		obj.sound();
		obj = dog;
		obj.sound();
		obj = cat;
		obj.sound();
		
	}

}
