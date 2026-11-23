let ballX = 150; 
let ballY = 150; 
let ballSize = 40; 
let speedX = 3; 
let speedY = 2; 
let isPaused = false; 

function setup() {
  createCanvas(600, 400); 
  canvas.parent('canvas-container');
}

function draw() {
  background(220); 

  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Ball Bouncing Animation", width / 2, 30);

  if (!isPaused) {

    ballX += speedX;
    ballY += speedY;

    if (ballX + ballSize / 2 >= width || ballX - ballSize / 2 <= 0) {
      speedX *= -1;
    }

    if (ballY + ballSize / 2 >= height || ballY - ballSize / 2 <= 0) {
      speedY *= -1;
    }
  }

  fill(50, 150, 255);
  noStroke();
  circle(ballX, ballY, ballSize);

  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("SPACE = Pause / Resume", width / 2, height - 45);
  text("UP / DOWN = Change Speed", width / 2, height - 25);

  text(isPaused ? "PAUSED" : "PLAYING", width / 2, 60);
}

function keyPressed() {

  if (key === ' ') {
    isPaused = !isPaused;
  }

  if (keyCode === UP_ARROW) {
    speedX *= 1.2;
    speedY *= 1.2;
  }

  if (keyCode === DOWN_ARROW) {
    speedX *= 0.8;
    speedY *= 0.8;
  }
}
