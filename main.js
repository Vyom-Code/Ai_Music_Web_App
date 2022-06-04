song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
score1=0;
score2=0;
songStatus=0;
function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("music.mp3(2).mp3");
}

function setup(){
    canvas = createCanvas(850,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function draw(){
    image(video, 0, 0, 650, 800);

    fill("#FF0000");
    stroke("#FF0000");

    status1= song1.playing;
    status2= song2.playing;

    if(score1 >0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song2.stop();

        if(status1 == false){
            song1.play();
            document.getElementById("empty").innerHTML ="Song 1 is playing";
        }
    }
    if(score2>0.2)
    {
        circle(rightWristX, rightWristY, 20);
        song1.stop();

        if(status2 == false){
            song2.play();
            document.getElementById(empty).innerHTML ="Song 2 is playing";
        }
    }
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX ="+ leftWristX+"leftWristY ="+ leftWristY);
        score1 = results[0].pose.keypoints[9].score;
        score2 = results[0].pose.keypoints[10].score;
        console.log("score1 ="+score1);
        console.log("score2"+ score2);


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX ="+rightWristX +"RightWristY ="+ rightWristY);
    }
}