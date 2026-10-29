


console.log("Start")
// // console.log("End")

function getuser(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("User data ...");
        resolve();
},3000);
});
}

function getUserBankDetails(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("User bank details ...");
        resolve()
    }, 1000);
    });
} 


function insurance(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("User insurance details ...");
        resolve()
    }, 2000);
    });
}


console.log("End")
// //callback,promise , async await( "Asynchronous to Synchronous" )

// //callback hell
// getuser(() => {
//     getUserBankDetails(()=>{
//         insurance();
//     });
// });


// // setTimeout(() => {
// //  console.log("Hello")
// // },3000 );

// // setTimeout(() => {
// //  console.log("welcome")
// // },1000 );

// console.log("End")



// Promise

// let mypromise =new Promise((resolve, reject)=>{
//    let age=10;
//    if(age>18){
//     resolve("Age is valid")
//    }
//    else{
//     reject("Age is invalid")
//    }
// });

// mypromise
// .then((msg)=> {
//     console.log(msg);
// })

// .catch((err)=>{
//     console.log(err)
// })


async function call(){
    await getuser();
    await getUserBankDetails();
    await insurance();

}
call()