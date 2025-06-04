let truckX = -100;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  drawField();
  drawCity();
  drawRoad();

  drawTruck(truckX, 310);
  truckX += 2;

  // Recomeça o movimento
  if (truckX > width + 100) {
    truckX = -100;
  }
}

// Campo (lado esquerdo)
function drawField() {
  fill(144, 238, 144);
  rect(0, 0, width / 2, height);

  // Árvore
  fill(139, 69, 19);
  rect(100, 250, 20, 80);
  fill(34, 139, 34);
  ellipse(110, 240, 80, 80);

  // Plantações
  fill(0, 100, 0);
  for (let i = 0; i < 5; i++) {
    ellipse(50 + i * 30, 360, 15, 15);
  }
}

// Cidade (lado direito)
function drawCity() {
  fill(200);
  rect(width / 2, 0, width / 2, height);

  fill(100);
  for (let i = 0; i < 4; i++) {
    let x = width / 2 + 50 + i * 60;
    rect(x, 200 - i * 20, 40, 200);
  }

  // Antena
  fill(150);
  rect(width - 80, 150, 10, 100);
  ellipse(width - 75, 140, 20, 20);
}

// Estrada
function drawRoad() {
  fill(50);
  rect(0, 300, width, 50);

  stroke(255);
  strokeWeight(4);
  for (let x = 0; x < width; x += 40) {
    line(x, 325, x + 20, 325);
  }
  noStroke();
}

// Caminhão animado
function drawTruck(x, y) {
  // Parte de trás
  fill(255, 0, 0);
  rect(x, y - 20, 60, 30);

  // Cabine
  fill(0, 0, 255);
  rect(x + 60, y - 10, 30, 20);

  // Rodas
  fill(0);
  ellipse(x + 15, y + 10, 15, 15);
  ellipse(x + 70, y + 10, 15, 15);
}

