//.this refers to the owner of the function Circle. This can be used globaly when used
function Circle(fedX,fedY,fedD){
  this.X=fedX;
  this.Y=fedY;
  this.D=fedD;
}

//new creates new object and helps link circle to new circle and a group of values in the array
let newcirc= new Circle(400,500,200);
let newcirc2= new Circle(700,500,200);
let circarray=[newcirc,newcirc2];

//circle1 became new Circle with x & y destination and diameter
let circ1 =new Circle(50,200,55);

//circle2 became new Circle with x & y destination and diameter
let circ2 =new Circle(350,200,55);

//circle3 became new Circle with x & y destination and diameter
let circ3 = new Circle(350,250,70);

//circle4 became new Circle with x & y destination and diameter
let circ4 = new Circle(50,250,70);

//Array is created that includes circles 1-4
let newCircleArray=[circ1,circ2,circ3,circ4];

//circle5 became an object
let circ5 = new Circle (200,200,170);
  

//Background color became an object
let bGC = {
  bR: 0,
  bG: 1,
  bB: 1
}


function setup() {
  createCanvas(400, 400);
}

//Canvas color is drawn by calling upon the BGC object
function draw() {
  background(bGC.bR, bGC.bG, bGC.bB);

  //.length just refers to all the values in the array in this for loop
  for(i=0;i<newCircleArray.length;i++){
    circle(newCircleArray[i].X, newCircleArray[i].Y, newCircleArray[i].D);
  }

  //Whenever the circles are equal the 5th circle will expand.
  if (circ1.X === circ2.X){
  circle (circ5.X,circ5.Y,circ5.D);
  circ5.D = circ5.D + 2;
  }
  
  //When the if statement is not true the circle will move
  else{
  circ1.X += 1;
  circ4.X += 1;
  circ2.X -= 1;
  circ3.X -= 1;
  }
  
}