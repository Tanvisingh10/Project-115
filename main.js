function preload(){
}
function setup(){
    canvas = createCanvas(400,350);
    canvas.position(850,200);
    video = createCapture(VIDEO);
    video.size(400,350);
    video.hide();
}
function st_lip(){
    poseNet = ml5.poseNet(video, model_li_Loaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}
function model_li_Loaded(){
    console.log('Lip filter is initialzed.');
}
function draw(){
    image(video,0,0,400,350);
}
function take_snapshot(){
    save('myFilterImage.png');
}