leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,500)
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized!")
}

function draw(){
    background("#d8f3dc");
    document.getElementById("font_size").innerHTML = "Font Size will be =  " + difference + " px";
    textSize(difference);
    fill("#ef233c");

    text("Surya", 325, 320);
}