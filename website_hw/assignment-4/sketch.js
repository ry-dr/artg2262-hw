function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(220);
  
  pattern = new Pattern(0.1, 20, 0.1, 10)
  
  
  
  
}

function draw() {}

class Pattern {
constructor(yf0, countX0, offsetX0, countY) {
  
  this.y_period = (height-(2*yf0*height))/countY/height;
  
  for (let i=0; i<countY; i++) {
  
    this.countX = countX0*random(5,17)/10;
    this.offsetX = offsetX0*random(6,15)/10;
    this.yf = yf0 + i*this.y_period;
    switch(int(random(0, 3))) {
      
      case 0:
        this.upTriRow(this.yf, this.countX, this.offsetX);
        break;
        
      case 1:
        this.downTriRow(this.yf, this.countX, this.offsetX);
        break;
        
      case 2:
        this.circleRow(this.yf, this.countX, this.offsetX);
        break;
      
    }
    
  }
  
  
  
}
  
  
upTriRow(yf, countX, margin) {
  this.x_offset = margin*width;
  this.x_period = (width-(2*this.x_offset))/countX;
  this.y = yf*height;
  this.size = (1/(3*countX))*min(width, height);
  
  
  for (let i=0; i<countX; i++) {
    this.ds = random(6, 15)/10;
    stroke(random(0, 255), random(0, 255), random(0, 255));
    triangle(
      this.x_offset+(i+0.5)*this.x_period-this.ds*this.size/2, 
      this.y+this.ds*this.size/2,
      
      this.x_offset+(i+0.5)*this.x_period+this.ds*this.size/2, 
      this.y+this.ds*this.size/2,
      
      this.x_offset+(i+0.5)*this.x_period, 
      this.y-this.ds*this.size/2
    );
  }
  
}
 
  
downTriRow(yf, countX, margin) {
  this.x_offset = margin*width;
  this.x_period = (width-(2*this.x_offset))/countX;
  this.y = yf*height;
  this.size = (1/(3*countX))*min(width, height);
  
  
  for (let i=0; i<countX; i++) {
    this.ds = random(6, 15)/10;
    stroke(random(0, 255), random(0, 255), random(0, 255));
    triangle(
      this.x_offset+(i+0.5)*this.x_period-this.ds*this.size/2, 
      this.y-this.ds*this.size/2,
      
      this.x_offset+(i+0.5)*this.x_period+this.ds*this.size/2, 
      this.y-this.ds*this.size/2,
      
      this.x_offset+(i+0.5)*this.x_period, 
      this.y+this.ds*this.size/2
    );
  }
  
}
  
circleRow(yf, countX, margin) {
  this.x_offset = margin*width;
  this.x_period = (width-(2*this.x_offset))/countX;
  this.y = yf*height;
  this.size = (1/(3*countX))*min(width, height);
  
  
  for (let i=0; i<countX; i++) {
    this.ds = random(6, 15)/10;
    stroke(random(0, 255), random(0, 255), random(0, 255));
    circle(
      this.x_offset+(i+0.5)*this.x_period,
      this.y,
      this.ds*this.size
    
    );
  }
  
} 
  
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}