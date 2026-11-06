// polymorphism is a ability of a method to behave differently when diff obj are acting upon it.

class Animal{
    sound()
{
console.log("Animal make sound")
    }
}
class Cat extends Animal{
        sound()
{
    super.sound();
    console.log("Cat make sound")
    }
}

class Dog extends Animal{
    sound()
{
    super.sound();
    console.log("Dog make sound")
    }
}
// const a = new Dog()
// a.sound();

function commonFunction(animal){
    animal.sound();
}

let a = new Animal();
let b = new Cat();
let c = new Dog();

commonFunction(c);