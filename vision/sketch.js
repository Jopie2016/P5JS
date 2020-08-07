let vBN = ["Better Prayer Life", "Get closer to God", "Get a developer job", "Give away 1 scholarship", "Keep my baby happy", "Buy first car", "Be engaged", "Start planning wedding", "700 credit score", "Tripple Salary", "Better son and friend"]

let index = 0;

//Background color became an object
let bGC = {
  bR: 251,
  bG: 255,
  bB: 0
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bGC.bR, bGC.bG, bGC.bB);
  fill(0);
  rect(25, 25, 350, 350);
  
  textSize(30);
  fill(bGC.bR, bGC.bG, bGC.bB)
  textAlign(CENTER);
  text(vBN[index], 200, 200);
}

function mousePressed() {
  index = index + 1;
  
  if (index === vBN.length) {
    index = 0;
  }
}