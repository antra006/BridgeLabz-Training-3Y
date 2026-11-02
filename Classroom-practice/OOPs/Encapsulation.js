// class Student {
//     #studentId=101;
//     #studentName="Antra";


// getDisplay()
// {
//     this.#studentId=102;
//     console.log("studentId :-"+ this.#studentId);
// }
// }


class Bank{
    #balance=5000;

    // deposite

    deposit(amount)
    {
        if(amount>0){
            this.#balance+=amount;
            console.log("Balance is :- "+ this.#balance);
        }else{
            console.log("Please enter valid amount");

        }
    }

    // withdraw

    withdraw(amount)
    {
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log("Balance is :- "+ this.#balance);
        }else{
            console.log("Please enter valid amount");

        }
    }

    // getbalance

    getBalance()
    {
        return this.#balance;
    }
}

const bank=new Bank();
// bank.deposit(1000);
// bank.withdraw(500);

let choice;
do{
    choice=Number(prompt(

    "---------------------SBI BANK---------------------\n"+
        "1. Bank Deposit\n"+
        "2. Bank Withdraw\n"+
        "3. Get Balance\n"+
        "4. Exit\n"+
    "---------------------------------------------------\n"+
        "Enter your choice :- "
    ));
    switch(choice){
        case 1:
            let amount=Number(prompt("Enter Deposit amount :- "));
            bank.deposit(amount);
            break;
        case 2:
            let value=Number(prompt("Enter Withdraw amount :- "));
            bank.withdraw(value);
            break;
        case 3: 
            console.log("Balance is :- "+ bank.getBalance());
            break;
        case 4:
            console.log("Thank you for using our services");
            break;
    }
} while(choice!=4);