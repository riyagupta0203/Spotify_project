let masterPlay = document.querySelector("#masterPlay");
let myProgressBar = document.querySelector("#myProgressBar");
let audioElement = new Audio("redSong.mp3");
let songIndex = 0;
let songItem = document.querySelectorAll(".songItem");
let songNames = document.querySelectorAll(".songName");
let timeStamp = document.querySelectorAll(".timeStamp");
let songItemPlay = document.querySelectorAll(".songItemPlay");
let autoPlay = document.querySelector("#autoPlay");
// let timeStamp = document.querySelectorAll(".timeStamp");
let currentT = document.querySelector(".currentT");



let songs = [
    {
        songName: "Red",
        filePath:"redSong.mp3"
    },
    {
        songName: "All Too Well (10 Minutes Version)",
        filePath:"Taylor_Swift_All_Too_Well_10_Minute_Version__(thinkNews.com.ng).mp3"
    },
    {
        songName: "I Knew You Were Trouble",
        filePath:"Taylor_Swift_I_Knew_You_Were_Trouble_(thinkNews.com.ng).mp3"
    },
    {
        songName: "State of Grace",
        filePath:"Taylor_Swift_State_Of_Grace_(thinkNews.com.ng).mp3"
    },
    {
        songName: "The Very First Night",
        filePath:"Taylor_Swift_The_Very_First_Night_(thinkNews.com.ng).mp3"
    },
    {
        songName: "We Are Never Ever Getting Back Together",
        filePath:"Taylor_Swift_We_Are_Never_Ever_Getting_Back_Together_(thinkNews.com.ng).mp3"
    }
]
for(var i=0;i<6;i++){
    songNames[i].innerText = songs[i].songName;
}



audioElement.addEventListener('timeupdate',()=>{
     let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    currentT.innerText = `${parseInt(audioElement.currentTime/60)}:${(audioElement.currentTime%60).toFixed(0)}/${parseInt(audioElement.duration/60)}:${(audioElement.duration%60).toFixed(0)}`;

})

function bnone(){
    for(var p=0;p<6;p++){
    songItem[p].style.border =  "none";
    }
}



myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = (myProgressBar.value)*(audioElement.duration)/100;
})


for(i=0;i<6;i++){
    songItem[i].addEventListener("click",(e)=>{
        songIndex = parseInt(e.target.id)
        
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        bnone();
        songItem[songIndex].style.border =  "3px solid #911c1c";
       

        
    })
}

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        songItem[songIndex].style.border =  "3px solid #911c1c"
        console.log(masterPlay.classList)
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
    }
})
document.querySelector("#next").addEventListener("click",()=>{
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    if(songIndex<5){
        audioElement.src = songs[songIndex+1].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        songIndex++; 
    }
    else{
        songIndex = 0;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
    }
    bnone();
    songItem[songIndex].style.border =  "3px solid #911c1c";
})

document.querySelector("#previous").addEventListener("click",()=>{
    masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

    if(songIndex>0){
        audioElement.src = songs[songIndex-1].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        songIndex--;
 
        
    }
    else{
        songIndex = 5;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
    }
    bnone();
    songItem[songIndex].style.border =  "3px solid #911c1c";
})
