"use strict";

const less = document.getElementById("less");
const more = document.getElementById("more");
const amountHTML = document.getElementById("amount");
let amount = 0;

less.addEventListener("click",()=>{
    if(amount>0){
        amount--;
        amountHTML.innerText = `${amount}`;
    }
});

more.addEventListener("click",()=>{
    if(amount<30){
        amount++;
        amountHTML.innerText = `${amount}`;
    }
});