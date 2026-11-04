//Single level , multilevel , multiple and heirarchical 
// constructor chaining happens by super keyword

// class Animal{

//     constructor(name){
//         this.name=name;
//     }
//     sound(){
//         console.log("Animal sound");
//     }
// }
// class Cat extends Animal{

//     constructor(name,breed){
//         super(name);
//         this.breed=breed;
//     }
//     sound(){
//         super.sound();
//         console.log("cat sound");
//     }
// }
// const c=new Cat();
// c.sound();




//student management portal
//fields:-StudentID ,
        //    student name
        //    student age
        //    student branch
        //    student specialization


//functions
 //Addstudent , DisplayDetails , RemoveStudent 
 // menu driven using switch case



 
class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log("Student ID :- " + this.id);
        console.log("Student Name :- " + this.name);
        console.log("Student Age :- " + this.age);
    }
}

class StudentDetails extends Student {
    constructor(id, name, age, branch, specialization) {
        super(id, name, age);
        this.branch = branch;
        this.specialization = specialization;
    }

    displayDetails() {
        super.displayDetails();
        console.log("Student Branch :- " + this.branch);
        console.log("Student Specialization :- " + this.specialization);
    }
}

let students = [];

let choice;

do {
    choice = Number(prompt(
        "STUDENT MANAGEMENT PORTAL\n" +
        "1. Add Student\n" +
        "2. Display Details\n" +
        "3. Remove Student\n" +
        "4. Exit\n" +
        "Enter your choice :- "
    ));

    switch (choice) {

        case 1:
            let id = Number(prompt("Enter Student ID :- "));
            let name = prompt("Enter Student Name :- ");
            let age = Number(prompt("Enter Student Age :- "));
            let branch = prompt("Enter Student Branch :- ");
            let specialization = prompt("Enter Specialization :- ");

            let s = new StudentDetails(id, name, age, branch, specialization);

            students.push(s);

            console.log("Student Added Successfully");
            break;

        case 2:
            if (students.length == 0) {
                console.log("No Student Found");
            } else {
                for (let i = 0; i < students.length; i++) {
                    students[i].displayDetails();
                    console.log("----------------------");
                }
            }
            break;

        case 3:
            let removeID = Number(prompt("Enter Student ID to Remove :- "));

            let found = false;

            for (let i = 0; i < students.length; i++) {
                if (students[i].id == removeID) {
                    students.splice(i, 1);
                    found = true;
                    console.log("Student Removed Successfully");
                    break;
                }
            }

            if (found == false) {
                console.log("Student Not Found");
            }
            break;

        case 4:
            console.log("Thank You!");
            break;

        default:
            console.log("Invalid Choice");
    }

} while (choice != 4);
  