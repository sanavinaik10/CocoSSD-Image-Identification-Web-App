img = "";
status = "";
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(600,420);
    canvas.position(450,190);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: In Detection Mode";
}
function modelLoaded(){
    console.log("Model is loaded!!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function draw(){
    image(img, 0, 0, 600,420);
    fill("#FF0000");
    text("Dog",50,50);
    noFill();
    stroke("#FF0000");
    rect(60,58,380,350);
    fill("#00F3FF");
    text("Cat",250,100);
    noFill();
    stroke("#00F3FF");
    rect(260,105,300,300);
    fill("#85FF85");
    text("Bowl", 250,320);
    noFill();
    stroke("#85FF85");
    rect(260,330,110,80);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
    }
}