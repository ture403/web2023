$(function(){
    //이미지 슬라이드
    let currentIndex = 0 ;
    $(".silder").append($(".silder img").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".silder").animate({marginTop: -400 * currentIndex +"px"},600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".silder").animate({marginTop:0},0);
                currentIndex=0;
            },700)
        }
    },3000)
});

//메뉴
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submemu").stop().slideDown();
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submemu").stop().slideUp();
});

const modal = document.querySelector(".modal");
const li = document.querySelector(".modal_open");

li.addEventListener("click",()=>{
    modal.style.display = "block";
})
document.querySelector(".close").addEventListener("click",()=>{
    modal.style.display ="none";
})