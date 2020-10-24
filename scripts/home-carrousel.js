"use strict";

const carrousel = document.getElementById("carrousel");
const left = document.getElementById("left");
const right = document.getElementById("right");
const dots = document.getElementsByClassName("carrousel__dot");

let index = 0;

left.addEventListener("click", ()=>{
    index = (index + 2)%3;
    carrousel.style.backgroundImage = `url("../assets/home/slider-1-${index+1}.jpg")`;
    updateDots(index);
});

right.addEventListener("click", ()=>{
    index = (index + 1)%3;
    carrousel.style.backgroundImage = `url("../assets/home/slider-1-${index+1}.jpg")`;
    updateDots(index);
});

function updateDots(index){
    for (let i = 0 ; i<dots.length ; i++) {
        if(i===index){
            dots[i].setAttribute("class","carrousel__dot--current carrousel__dot");
        }else{
            dots[i].setAttribute("class","carrousel__dot");
        }
    }
}