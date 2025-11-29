// by 박건우 (2025)
// 600x400, 정적 버전 + PNG 저장(p 키)

let bgColor;

function setup() {
  createCanvas(600, 400);   // 가로 600, 세로 400
  bgColor = color(240, 195, 100);
  noLoop();                 // 한 번만 그리기
}

function draw() {
  background(bgColor);

  // === 이름 텍스트 ===
  noStroke();
  fill(60, 40, 30);
  textAlign(CENTER, CENTER);
  textSize(28);
  textStyle(BOLD);
  text("박건우", width / 2, 40);

  // === 얼굴 ===
  stroke(0);
  strokeWeight(3);
  fill(255, 240, 210);
  ellipse(300, 230, 180, 180); // x 200 → 300 (가로 중심으로 이동)

  // === 귀 ===
  fill(255, 230, 190);
  ellipse(220, 240, 35, 35);   // 120 → 220
  ellipse(380, 240, 35, 35);   // 280 → 380

  // === 눈 (항상 열린 상태) ===
  stroke(0);
  strokeWeight(3);
  fill(255);
  ellipse(265, 230, 40, 40);   // 165 → 265
  ellipse(335, 230, 40, 40);   // 235 → 335

  // 눈동자
  fill(0);
  ellipse(265, 230, 18, 24);
  ellipse(335, 230, 18, 24);

  // 하이라이트
  noStroke();
  fill(255);
  ellipse(270, 225, 5, 5);
  ellipse(340, 225, 5, 5);

  // === 눈썹 ===
  stroke(0);
  strokeWeight(5);
  noFill();
  arc(265, 205, 50, 20, PI, TWO_PI);
  arc(335, 205, 50, 20, PI, TWO_PI);

  // === 입 (항상 닫힌 상태) ===
  noStroke();
  fill(0);
  arc(300, 275, 80, 40, 0, PI);
  fill(255, 100, 100);
  arc(300, 275, 70, 30, 0, PI);

  // === 볼터치 ===
  fill(255, 170, 170, 120);
  ellipse(240, 250, 25, 15);   // 140 → 240
  ellipse(360, 250, 25, 15);   // 260 → 360

  // === 모자 ===
  noStroke();
  fill(190, 140, 90);          // 윗면
  ellipse(300, 130, 160, 80);  // 200 → 300

  fill(120, 80, 50);           // 챙
  ellipse(300, 160, 190, 55);

  fill(80, 50, 30, 60);        // 그림자
  ellipse(300, 165, 200, 50);
}

// PNG 저장: p 키를 누르면 600x400 PNG 저장
function keyPressed() {
  if (key === 'p') {
    saveCanvas('ParkGeonwoo_600x400', 'png');
  }
}
