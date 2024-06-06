function setup() {
  createCanvas(600, 600);
  background(30, 30, 60); // Dark blue background 
  // Draw stars
  for (let i = 0; i < 100; i++) {
    let starX = random(width);
    let starY = random(height);
    let starSize = random(1, 3);
    fill(255);
    noStroke();
    ellipse(starX, starY, starSize, starSize);
  }
}

function draw() {
  drawAlien(300, 300);
}

function drawAlien(x, y) {
  // Body
  fill(0, 255, 0); // Green color
  noStroke();
  ellipse(x, y, 150, 200);

  // Eyes
  fill(255); // White color
  ellipse(x - 35, y - 40, 40, 60);
  ellipse(x + 35, y - 40, 40, 60);

  // Pupils
  fill(0); // Black color
  ellipse(x - 35, y - 40, 15, 30);
  ellipse(x + 35, y - 40, 15, 30);

  // Eye highlights
  fill(255); // White color
  ellipse(x - 38, y - 45, 5, 5);
  ellipse(x + 32, y - 45, 5, 5);

  // Antennas
  stroke(0, 255, 0);
  strokeWeight(4);
  line(x - 35, y - 100, x - 55, y - 150);
  line(x + 35, y - 100, x + 55, y - 150);

  // Antenna ends
  fill(255, 0, 0); // Red color
  ellipse(x - 55, y - 150, 15, 15);
  ellipse(x + 55, y - 150, 15, 15);

  // Mouth
  noFill();
  stroke(255, 0, 0); // Red color
  strokeWeight(2);
  arc(x, y + 40, 60, 30, 0, PI);

  // Arms
  stroke(0, 255, 0);
  strokeWeight(10);
  line(x - 75, y + 20, x - 125, y + 80);
  line(x + 75, y + 20, x + 125, y + 80);

  // Legs
  line(x - 40, y + 100, x - 60, y + 160);
  line(x + 40, y + 100, x + 60, y + 160);

  // Feet
  fill(0, 255, 0);
  ellipse(x - 60, y + 160, 20, 10);
  ellipse(x + 60, y + 160, 20, 10);
}
