noseX = 0;
noseY = 0;
user_name = '';
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(420, 420)
    canvas.position(600, 250)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('lightgreen')
    user_name = document.getElementById('user_name').value;
    textSize(difference);
    fill('darkgreen')
    text(user_name, 50, 400)
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX - rightWristX);
    }
}
