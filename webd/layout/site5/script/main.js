const noticeh4 = document.querySelector(".notice h4");
const gallery4 = document.querySelector(".gallery h4");
const notice = document.querySelector(".galleryWrap .notice ul");
const gallery = document.querySelector(".gallery .imgInner");




noticeh4.addEventListener("click",()=>{
    gallery.classList.remove("active");
    notice.classList.add("active");
})

gallery4.addEventListener("click",()=>{
    notice.classList.remove("active");
    gallery.classList.add("active");
})

$(function(){
    //이미지 슬라이드
    let currentIndex = 0 ;
    $(".sliderWrap .inner").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap .inner").animate({marginTop: 400 * currentIndex +"px"},600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap .inner").animate({marginTop:0},0);
                currentIndex=0;
            },700)
        }
    },3000)
});
$("nav > ul > li").mouseover(function(){
    $(".nav > ul > li").show()
});
$("nav > ul > li").mouseout(function(){
    $(".nav > ul > li").find(".submemu").stop().slideUp();
});

const submemu = document.querySelectorAll(".submemu");
const liList = document.querySelectorAll("nav > ul > li");
const ul = document.querySelector("nav > ul");
ul.classList.add("before");

liList.forEach((el,i)=>{
    el.addEventListener("mouseover",()=>{
        ul.classList.add("active");
        ul.style.transition = "3s";
        submemu.forEach(el=>{
            el.style.opacity ="1";
        })
        
    })
    el.addEventListener("mouseleave",()=>{
        ul.classList.remove("active");
        submemu.forEach(el=>{
            el.style.opacity ="0";
        })
    })
})
const nitceli = document.querySelector(".notice li");
const modal = document.querySelector(".modal");
const modalspan = document.querySelector(".modal span");

nitceli.addEventListener("click",()=>{
    modal.style.display="block";
})

modalspan.addEventListener("click",()=>{
    modal.style.display="none";
})