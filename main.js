song1="";
song2="";
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
    song1=loadSound("angfjkahefvb.mp3");
    song2=loadSound("music2.mp3");
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
    image(video,0,0,600,500);
    song1_status=song1.isPlaying();
    song2_status=song2.isPlaying();
    fill("#98c1d9");
    stroke("#293241");
    if(scoreRightWrist>0.2){
        circle(rwx,rwy,30);
        song2.stop();
        if(song1_status==false){
    song1.play();
        }
    
        if(scoreLeftWrist>0.2){
            circle(lwx,lwy,30);
            song1.stop();
            if(song2_status==false){
        song2.play();
            }
        }}
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
scoreRightWrist=results[0].pose.keypoints[10].score;
scoreLeftWrist=results[0].pose.keypoints[9].score;

lwx=results[0].pose.leftWrist.x;
lwy=results[0].pose.leftWrist.y;
console.log("Left Wrist X:"+lwx+"Left Wrist Y:"+lwy+".");
rwx=results[0].pose.rightWrist.x;
rwy=results[0].pose.rightWrist.y;
console.log("Right Wrist X:"+rwx+"Right Wrist Y:"+rwy+".");
    }
}
