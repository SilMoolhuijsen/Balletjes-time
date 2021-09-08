var x, y, v, s;

function setup() {
	createCanvas(500, 400);

  x = 30;
  y = 30;
  v = 4;
  s = 4;
}

function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + v;
  y = y + s;

  if(x <= 30 || x >= 470){
    v = v * -1;
  }
  if(y <= 30 || y >= 370){
    s = s * -1;
  }
}
