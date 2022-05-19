Status = "";
input_text = "";

function setup() {
    canvas = createCanvas(300,290);
    canvas.position(480,250);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide()
}
function start() {
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = decument.getElementById("input_id").value;
}
function modelLoaded() {
    console.log("Model Loaded");
    Status = true();
}
function draw() {
    image(video,0,0,300,290);
}