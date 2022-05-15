song1="";
song2="";
function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("music.mp3(2).mp3");
}

function setup(){
    canvas = createCanvas(850,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 650, 800);
}
