img = "";
status1 = "";

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects...";
}

function modelLoaded() {
  console.log("Model is Loaded");
  status1 = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }

  console.log(results);
}

function preload() {
  img = loadImage("dog_cat.jpg");
}

function draw() {
  image(img, 0, 0, 600, 400);

  fill("#800000");
  text("dog", 110, 115);
  noFill();
  stroke("#0000A0");
  rect(100, 100, 300, 280);

  fill("#73000b");
  text("cat", 270, 125);
  noFill();
  stroke("#59142e");
  rect(260, 110, 300, 280);
}

