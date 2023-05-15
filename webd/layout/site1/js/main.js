$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(300);
        $("header .container").addClass("on");
    })
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(100);
        $("header .container").removeClass("on");
    })

    //슬라이드
    let currentIndex = 0;
    const $sliderWrap = $(".sliderWrap"); //이지미 부모 움직이는 영역
    const $slider = $(".slider"); //각각 이미지
    const $sliderWidth = $slider.width(); //이미지 가로값
    $sliderWrap.append($slider.first().clone(true)); //첫번째 이미지를 복사해서 마지막에 추가

    setInterval(function(){
        currentIndex++; //현재 이미지를 1씩 증가
        $sliderWrap.animate({marginLeft: -$sliderWidth *currentIndex},600);

        if(currentIndex == $slider.length){
            setTimeout(() => {
                $sliderWrap.animate({marginLeft:0},0);
                currentIndex = 0;
            },700);
        }
    },3000)


});