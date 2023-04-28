//전체 이미지와 오디오 객체에 저장
const allMusic = [
    {
        name : "1. 저리가라",
        artist : "partick",
        img : "music_view01",
        audio : "music_audio01"
    },{
        name : "2. 저리가라",
        artist : "partick",
        img : "music_view02",
        audio : "music_audio02"
    },{
        name : "3. 저리가라",
        artist : "partick",
        img : "music_view03",
        audio : "music_audio03"
    },{
        name : "4. 저리가라",
        artist : "partick",
        img : "music_view04",
        audio : "music_audio04"
    },{
        name : "5. 저리가라",
        artist : "partick",
        img : "music_view05",
        audio : "music_audio05"
    },{
        name : "6. 저리가라",
        artist : "partick",
        img : "music_view06",
        audio : "music_audio06"
    },{
        name : "7. 저리가라",
        artist : "partick",
        img : "music_view07",
        audio : "music_audio07"
    },{
        name : "8. 저리가라",
        artist : "partick",
        img : "music_view08",
        audio : "music_audio08"
    },{
        name : "9. 저리가라",
        artist : "partick",
        img : "music_view09",
        audio : "music_audio09"
    },{
        name : "10. 저리가라",
        artist : "partick",
        img : "music_view10",
        audio : "music_audio10"
    },
];

//선언자
const musicWrap  = document.querySelector(".music_wrap");
const musicName = musicWrap.querySelector(".music_control .title h3");
const musicArtist = musicWrap.querySelector(".music_control .title p");
const musicView = musicWrap.querySelector(".music_view .images img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicplay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");


let musicIndex = 1; //현재 음악 인덱스

//음악재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name; //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist; //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`; //뮤직 이미지
    musicView.alt = allMusic[num-1].name; //뮤직이미지 alt
    musicAudio.src =`audio/${allMusic[num-1].audio}.mp3`; //뮤직이미지 alt
}

//재생버튼
const playMusic = () => {
    musicWrap.classList.add("paused"); //paused를 클래스에 추가
    musicplay.setAttribute("title", "정지"); //musicplay에 title 을 정지로 변경
    musicplay.setAttribute("class", "stop"); //musicplay에 class 을 stop로 변경

    musicAudio.play();
}

//정지버튼
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicplay.setAttribute("title", "재생");
    musicplay.setAttribute("class", "play");
    
    musicAudio.pause();
}

//이전 곡 듣기
const prevMusic = () => {

    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;
    loadMusic(musicIndex);
    playMusic();
}

//다음 곡 듣기
const nextMusic = () => {
    // musicIndex++;
    // if(musicIndex > 10)musicIndex = 1;

    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;
    loadMusic(musicIndex);
    playMusic();
}

// 뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {
    const currentTime = e.target.currentTime; //현재 재생되는 시간
    const duration = e.target.duration; //오디오의 총 길이
    let progressWidth = (currentTime / duration) *100; //전체길이 /현재진행되는 시간
    musicProgressBar.style.width = `${progressWidth}%`;

    //전체 시간
    musicAudio.addEventListener("loadeddata",()=>{
        let audiodrutaion = musicAudio.duration;
        console.log(audiodrutaion)
        let totalMin = Math.floor(audiodrutaion / 60);
        let totalSec = Math.floor(audiodrutaion % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;

    });

    //진행 시간
    let currentMin =Math.floor(currentTime/60); 
    let currentSec =Math.floor(currentTime%60);
    if(currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
})
//진행 버튼 클릭
musicProgress.addEventListener("click", (e)=> {
    let progressWidth = musicProgress.clientWidth; //전체 진행 길이;
    let clickedOffsetX = e.offsetX; //진행바를 기준으로 측정되는 x좌표 값
    let songDuration = musicAudio.duration; //오디오 전체 길이

    //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickedOffsetX/progressWidth) *songDuration;
})

//플레이버튼 클릭
musicplay.addEventListener("click",()=>{
    const isMusicpaused = musicWrap.classList.contains("paused"); //음악재생중
    isMusicpaused ? pauseMusic() : playMusic();
});

//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click",()=>{
    prevMusic();
});

//다음곡 버튼 클릭
musicNextBtn.addEventListener("click",()=>{
    nextMusic();
});

window.addEventListener("load",()=>{
    loadMusic(musicIndex);
});