music1="";
music2="";
song1_status="";
song2_status="";
scoreRightWrist=0;
scoreLeftWrist=0;
lwx=0;
lwy=0;
rwx=0;
rwy=0;
function preload()
{
    music1=loadSound("angfjkahefvb.mp3");
    music2=loadSound("music2.mp3");
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("LEZZ GOOO");
}

function draw()
{
    image(video,0,0,600,500)
}
function gotPoses(){
    if(results.length>0){
        console.log(results)
lwx=results[0].pose.leftWrist.x;
lwy=results[0].pose.leftWrist.y;
console.log("Left Wrist X:"+lwx+"Left Wrist Y:"+lwy+".");
rwx=results[0].pose.rightWrist.x;
rwy=results[0].pose.rightWrist.y;
console.log("Right Wrist X:"+rwx+"Right Wrist Y:"+rwy+".");
    }
}