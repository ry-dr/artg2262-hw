let t = 0;
let dt = 1/60;

let sR;
let sG;
let sB;
let sS;
let sM;

let btn;
let randomized = false;

let clr;
let help;

let x1;
let y1;

function setup() {
  createCanvas(600, 600);
  
  background(214, 230, 255);
  
  // Drawing Area
  stroke(255, 255, 255);
  fill(255, 255, 255);
  rect(20, 100, 560, 480);
  
  // Controls Area
  stroke(255, 255, 255);
  fill(255, 255, 255);
  rect(20, 30, 560, 60);
  
  // Controls
  sR = createSlider(0, 255, 0);
  sR.position(22, 30);
  sR.size(150);
  
  sG = createSlider(0, 255, 0);
  sG.position(22, 50);
  sG.size(150);
  
  sB = createSlider(0, 255, 0);
  sB.position(22, 70);
  sB.size(150);
  
  stroke(0, 0, 0);
  fill(0, 0, 0);
  square(190, 40, 40);
  
  sS = createSlider(1, 10, 1);
  sS.position(420, 30);
  sS.size(150);
  
  circle(390, 40, 1);
  
  sM = createSlider(0, 1, 0);
  sM.position(480, 60);
  sM.size(40);
  
  text("Paint", 450, 75);
  text("Erase", 527, 75);
  
  // Randomizer  
  btn = createButton("Randomize?")
  btn.position(250, 52);
  btn.mousePressed(onBtnPress);
  text("Off", 285, 85);
  
  // Clear
  clr = createButton("Clear");
  clr.position(270, 30);
  clr.mousePressed(onClrPress);
  
  // Instructions
  help = createButton("?");
  help.position(400, 60);
  help.mousePressed(onHelpPress);
  
}



function draw() {
  
  R = sR.value();
  G = sG.value();
  B = sB.value();
  size = sS.value();
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  circle(390, 40, 11);
  
  stroke(0, 0, 0);
  fill(0, 0, 0);
  circle(390, 40, size);
  
  fill(R, G, B);
  square(190, 40, 40);
  
  if (sM.value() == 0) {
  
  if (randomized == false) {
    stroke(R, G, B);
    strokeWeight(size);
  } else if (randomized == true) {
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(random(1, 10));
  }
  
  if (mouseIsPressed && 
      20 < mouseX && mouseX < 580 && 
      100 < mouseY && mouseY < 580) {
    x = mouseX;
    y = mouseY;
    vertex(x, y);
    endShape();
    beginShape();
    vertex(x, y); 
  }
  } else if (sM.value() == 1) {
    
    strokeWeight(1);
    stroke(255, 255, 255);
    fill(255, 255, 255);
    
    if (mouseIsPressed && 
      20 < mouseX && mouseX < 580 && 
      100 < mouseY && mouseY < 580) {
    x = mouseX;
    y = mouseY;
    vertex(x, y); 
    } 
  
  }
}


function mouseClicked() {
  
  
}

function mousePressed() {
  if (20 < mouseX && mouseX < 580 && 100 < mouseY && mouseY < 580) {
  
    if (sM.value() == 0) {
      noFill();
      beginShape();
      vertex(mouseX, mouseY);
    } else if (sM.value() == 1) {
      beginShape();
      vertex(mouseX, mouseY);
    }
  }
}

function mouseReleased() {
  
  if (sM.value() == 0) {
    endShape();
  } else if (sM.value() == 1 && 20 < mouseX && mouseX < 580 && 100 < mouseY && mouseY < 580) {
    endShape();
    beginShape();
    vertex(600, 600);
    endShape();
  }
}

function onBtnPress() {
  
  randomized = !randomized;
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  rect(290, 60, 50, 20);
  
  stroke(0, 0, 0);
  fill(0, 0, 0);
  if (randomized == true) {
    text("On", 285, 85);
  } else {
    text("Off", 285, 85);  
  }
  
}

function onClrPress() {
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  rect(20, 100, 560, 480);
}

function onHelpPress() {
  onClrPress();
  strokeWeight(1);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  text("1. Triple sliders control RGB values of brush.", 25, 115);
  text("2. Top-Right slider controls brush size.", 25, 135);
  text("3. Paint/Erase slider toggles paint/erase modes.", 25, 155);
  text("4. To Paint, drag the mouse around the drawing area.", 25, 175);
  text("5. To Erase, trace a region to erase.", 25, 195);
  text("6. Randomize? randomizes brush size and color during use.", 25,           215);
  text("7. Clear, clears the drawing area.", 25, 235);
  text("To hide these instructions, please press 'Clear'.", 25, 255);
}

