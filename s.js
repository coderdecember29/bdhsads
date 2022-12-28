noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload(){

}

function setup(){
video = createCapture(VIDEO);
video.size(500, 500);
canvas = createCanvas(500, 500);
canvas.position(560,150);
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet Is initialized')
}
function draw(){
    document.getElementById("square_side").innerHTML = "width and height of the square will be = " + difference + "px";
background('#969A97');
fill('red');
stroke('black');

square(noseX, noseY, difference);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}