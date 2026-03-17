let startTime;
let m;
let screenSaver;
let c = [0, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  background(0, 0, 0);
  screenSaver = new ScreenSaver();
  
  startTime = millis();
  
  fullscreen(true);
  
}

function draw() {

  if (millis() - startTime > 10) {
    screenSaver.addShape()
    screenSaver.showTime();
    
    startTime = millis();
  }
  
}

class ScreenSaver{
  constructor() {

  }
  
  addShape() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.s = random(5, 0.15 * width);
    this.phi = random(0, 2*PI);
    rotate(this.phi);
    
    for (let i=0; i<3; i++) {
      c[i] = random(0, 255);
    }
    
    stroke(c);
    fill(c);
    switch(int(random(0, 2))) {
      
      case 0:
        Tri(this.x, this.y, this.s);
        break;
        
      case 1:
        circle(this.x, this.y, this.s);
        break;
      
    }
    rotate(-this.phi);
  }
  
  showTime() {
    if (m != minute()) {
      m = minute()
      background(0, 0, 0);
    }
    
    stroke(255, 255, 255);
    fill(255, 255, 255);
    textSize(30);
    text(hour() + ":" + m, width/2, 0.1*height)
  }
  
  
  
  
}

function Tri(x, y, size) {
  triangle(x-size/2, y+size/2, x, y-size/2, x+size/2, y+size/2);
}

