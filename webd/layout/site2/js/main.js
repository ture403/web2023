

const sliderWrap = document.querySelector(".slider_wrap");
const slider = document.querySelector(".slider");
const ing = slider.querySelectorAll("img");
let currentIndex = 0;

setInterval(()=>{
    currentIndex++;
    if(currentIndex > 2) {
        currentIndex = 0;
    }
    slider.style.transition = "2s";
    slider.style.marginTop = `${-350*currentIndex}px`;
},3000)

const hover = document.querySelectorAll(".hover");
const pop = document.querySelectorAll(".pop");

hover.forEach((el,i)=>{
    el.addEventListener("mousemove",()=>{
        pop[i].style.display= "block";
    })
    el.addEventListener("mouseleave",()=>{
        pop[i].style.display= "none";
    })
})