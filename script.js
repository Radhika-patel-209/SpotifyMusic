console.log("Hello Every one ");
let audioelement = new Audio('tera.mp3');
let songIndex = 0;
let masterplay = document.getElementById('MasterPlay');
let process = document.getElementById('processbar');
let gif = document.getElementById('gif');
// audioelement.play();
let songs=[
    {songName : "Tera Hoon Main" , filePath :"tera.mp3" ,coverPath :'itni si bat.jfif'},
    {songName : "Itni Si Baat Hain" , filePath :"tera.mp3" ,coverPath :'itni si bat2.jfif'},
    {songName : "Duaa" , filePath :"tera.mp3" ,coverPath :'Duaaa.jfif'},
    {songName : "Dekha Hazaro Dafaa" , filePath :"tera.mp3" ,coverPath :'Dekha hazaro dafaa.jfif'},
    {songName : "Main Hoon Saath Tere" , filePath :"tera.mp3" ,coverPath :'me hoon sath tere.jfif'},
    {songName : "Khairiyat" , filePath :"tera.mp3" ,coverPath :'kheriyat.jfif'},
    {songName : "Oh Saaiyaan" , filePath :"tera.mp3" ,coverPath :'o shiyaa.jfif'},
    {songName : "Heer Ranjhana" , filePath :"tera.mp3" ,coverPath :'heer ranjha.jfif'},
    
]

//events
masterplay.addEventListener('click' ,()=>{
    if(audioelement.paused || audioelement.currentTime <= 0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioelement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity =0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    process.value = progress;
})
process.addEventListener('change' , ()=>{
    audioelement.currentTime = process.value * audioelement.duration /100;
})
