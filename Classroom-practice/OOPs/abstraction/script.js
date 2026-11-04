// class student {
//     #studentId;

//     #getDetails(){
//         console.log(this.#studentId);
//     }

//     commonMethod(){
//         this.#getDetails();
//     }
// }

// const a=new Student();
// a.commonMethod();



class bank{
    #bankName;
    #getdetails(){
        console.log(this.#bankName);
    }

    commonMethod1(){
        this.#getdetails();
    } 
}