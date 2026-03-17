
let w;
let h;

function setup() {

  createCanvas(windowWidth, windowHeight);

  w = width;
  h = height;
  
}

function draw() {
  
  background(255, 255, 255);
  
  // circle(w/2, h/2, 0.7 * min(w, h));  // Face Outline
  
  portrait = new Features(0.5, 0.5)
  
  text("Human Abstraction", 0.85*w, 0.95*h)
   
}
  
class Features {  

constructor(xf, yf) {
  this.x = xf*w;
  this.y = yf*h;
  
  noFill();
  this.display()
}
  
display() {
  this.head(0.7);
  this.eye(0.3*w, 0.4*h, 0.035, 0.03);
  this.eye(0.59*w, 0.4*h, 0.035, 0.03);
  this.nose(0.03, 0.1, 0.05);
  this.glasses(0.3+1.5*0.03, 0.4, 0.2);
  this.mouth(0.7, 0.3, 0.1);
}
  
  
head(df) {
  stroke(0, 0, 0);
  circle(this.x, this.y, df*min(w, h));
}
  
glasses(xf, yf, df) {
  stroke(242, 161, 114);
  noFill();
  let r = df*min(w, h)/2;
  circle(xf*w, yf*h, 2*r);
  circle((1-xf)*w, yf*h, 2*r);
  line(xf*w+r, yf*h, (1-xf)*w-r, yf*h);
  line(xf*w-r, yf*h, xf*w-1.1*r, yf*h-0.6*r);
    line((1-xf)*w+r, yf*h, (1-xf)*w+1.1*r, yf*h-0.6*r);
}
  
eye(x, y, xw, yh) {
  stroke(47, 199, 237);
  beginShape();
  vertex(x, y);
  bezierVertex(x+xw*w, y-yh*h, x+2*xw*w, y-yh*h, x+3*xw*w, y);
  bezierVertex(x+2*xw*w, y+yh*h, x+xw*w, y+yh*h, x, y);
  endShape();
}
  
nose(xf, yf, dy) {
  stroke(0, 0, 0);
  beginShape()
  vertex(this.x, dy*h + this.y-yf*h);
  vertex(this.x+xf*w, dy*h + this.y+yf*h/5);
  vertex(this.x-xf*w, dy*h + this.y+yf*h/5);
  vertex(this.x, dy*h + this.y-yf*h);
  endShape();
}
  
mouth(yf, df, dy) {
  stroke(232, 79, 125);
  let xf0 = 0.5-df/2;
  let xfa = 0.5-df/4;
  let xfb = 0.5+df/4;
  let xf1 = 0.5+df/2;
  bezier(xf0*w, yf*h, xfa*w, yf*h-dy*h, xfb*w, yf*h+dy*h, xf1*w, yf*h);
  // line(xf0*w, yf*h, xf1*w, yf*h);
}
  
  
  
}










function windowResized() {
  
  resizeCanvas(windowWidth, windowHeight)

}