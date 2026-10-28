// let headingE1 =document.getElementById("heading");
let headingEl =document.querySelector("#heading");

// headingEl.style.color="red";
// headingEl.style.backgroundColor="blue";
// headingEl.textContent="qwertyuncle";
// headingEl.innerHTML+="<h2>Hey there qwertyuncle new element</h2>"
let btnEl=document.querySelector("#btn");
let btnEL=document.querySelector("#bttn");
let btnEL2=document.querySelector("#btttn");
let boxEl=document.querySelector(".box");
let count1=0;
// let count2=0;

let fun=()=>{
    // headingEl.style.color="red";
    // headingEl.textContent="qwertyuncle";
    count1++;
    headingEl.textContent=count1;
}
btnEl.addEventListener("click", fun);

let fun2=()=>{
    count1--;
    headingEl.textContent=count1;
}
btnEL.addEventListener("click", fun2);
let fun3=()=>{
    count1=0;
    headingEl.textContent=count1;
}
btnEL2.addEventListener("click", fun3);
console.log(headingEl);

boxEl.addEventListener("mouseover",()=>{
     let arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = '#';
    for(let i=0;i<6;i++){
        let randomNum= Math.floor(Math.random()*15);
        hexColor += arr[randomNum];
    }
    boxEl.style.backgroundColor=hexColor;
})