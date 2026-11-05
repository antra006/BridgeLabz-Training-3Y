class Animal{
    sound(){
        console.log("Animal sound");
    }
}
class Cat extends Animal{
        super.sound();
         sound(){
        super.sound();
        console.log("cat sound");}
}  
const c=new Cat();
c.sound();
