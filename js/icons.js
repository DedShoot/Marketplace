const iconPrev = document.querySelector("#prev");
const iconNext = document.querySelector("#next");
const playerConteiner =document.querySelector(".icons");
const iconPlayPause =document.querySelector("#playPause img");
const iconMute = document.querySelector("#mute img");
const video = document.getElementById("bg-video");
const playlist = ['Jojo Opening 2 (Cover By Roma Donskoy).mp4' ,
     "Jojo's Bizarre Adventure OP 2  UHD 2160p  Creditless.mp4",
     'what if Dota 2 has an anime opening.mp4']
let number = 0;
function pauseIcons(){
    if(video.paused   ){
        video.play()
        iconPlayPause.src="video/icons/icons8-воспроизведение-50.png";

    } 
    else{
        video.pause();
        iconPlayPause.src="video/icons/icons8-пауза-30.png";
    }
    



   
}
function muteIcons(){
 if(video.muted){
    video.muted= false;
    iconMute.src='video/icons/icons8-звук-в-комнате-50.png';
 }
 else{
    video.muted = true;
    iconMute.src='video/icons/icons8-выключить-звук-50.png';
 }



}
function prevIcons(){
   
    video.src = `video/${playlist[number]}`
 
    if(number > 0){
        number--;

    }
    else{
        number = playlist.length - 1;
    }
    video.src = `video/${playlist[number]}`
}
    





function nextIcons(){
    if(number < playlist.length - 1){
        number ++;

    }
    else{
        number = 0;
    }
    video.src = `video/${playlist[number]}`
}
function showIcons(){
    playerConteiner.classList.toggle("show");
}

