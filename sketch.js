/*
	Game Project Part 2 - Game Character
*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(125, 125, 125);

  stroke(100);
  noFill();
  rect(20, 60, 50, 80);
  noStroke();
  fill(0);
  text("1. standing front facing", 20, 160);

  gameChar_x = 45;
  gameChar_y = 137;
  //CODE1

  stroke(0);
  strokeWeight(1.8);
  fill("a9a9a9");
  ellipse(gameChar_x - 1, gameChar_y - 47, 30, 30);
  rect(gameChar_x - 16, gameChar_y - 47, 30, 22.5);
  triangle(
    gameChar_x - 16,
    gameChar_y - 24.5,
    gameChar_x - 8,
    gameChar_y - 24.5,
    gameChar_x - 16,
    gameChar_y - 9
  ); //first corner
  triangle(
    gameChar_x - 11,
    gameChar_y - 24.5,
    gameChar_x + 1,
    gameChar_y - 24.5,
    gameChar_x - 7,
    gameChar_y - 12.5
  ); //2nd tri
  triangle(
    gameChar_x - 2,
    gameChar_y - 24.5,
    gameChar_x + 10,
    gameChar_y - 24.5,
    gameChar_x + 2,
    gameChar_y - 12.5
  ); //3rd tri
  triangle(
    gameChar_x + 4.8,
    gameChar_y - 24.5,
    gameChar_x + 13.8,
    gameChar_y - 24.5,
    gameChar_x + 14,
    gameChar_y - 9
  ); //4THcorner tri

  //filler rect to hide stroke

  noStroke();
  fill("a9a9a9");
  rect(gameChar_x - 15.1, gameChar_y - 49, 28, 27.9);

  //eyes

  fill(0);
  noStroke();
  circle(gameChar_x - 7.5, gameChar_y - 47, 6);
  circle(gameChar_x + 4.5, gameChar_y - 47, 6);

  //mouth

  rect(gameChar_x - 11, gameChar_y - 37, 19, 1);
  stroke(0);
  strokeWeight(0.8);
  fill(255, 0, 0);
  triangle(
    gameChar_x + 7.5,
    gameChar_y - 36,
    gameChar_x + 5.5,
    gameChar_y - 33,
    gameChar_x + 3.5,
    gameChar_y - 36
  );
  triangle(
    gameChar_x - 6.5,
    gameChar_y - 36,
    gameChar_x - 8.5,
    gameChar_y - 33,
    gameChar_x - 10.5,
    gameChar_y - 36
  );

  //BLOOD

  //bottom half of blood (circle)

  fill(255, 0, 0);
  stroke("#740707");
  strokeWeight(1.1);
  circle(gameChar_x + 6, gameChar_y - 25, 1.5);

  //top half of blood (triangle ish shape)

  push();
  beginShape();
  translate(gameChar_x - 44, gameChar_y - 138);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(190 / 3.8, 203 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  endShape();
  pop();

  //white blood shade

  fill(255);
  noStroke();
  ellipse(gameChar_x + 6.35, gameChar_y - 25, 1, 1.5);

  //shade for ghost

  push();
  fill(0, 0, 0, 50);
  translate(gameChar_x - 45, gameChar_y - 137);
  beginShape();
  curveVertex(46, 78);
  curveVertex(46, 78);
  curveVertex(52, 81);
  curveVertex(55, 86);
  curveVertex(55, 86);
  endShape();
  pop();

  //Walking, turned left
  stroke(100);
  noFill();
  rect(gameChar_x - 25, gameChar_y + 123, 50, 80);
  noStroke();
  fill(0);

  //END OF CODE1

  text("2. jumping facing forwards", 220, 160);

  gameChar_x = 245;
  gameChar_y = 137;
  //CODE2

  //triangles (left to right)

  stroke(0);
  strokeWeight(2);
  fill("a9a9a9");
  ellipse(gameChar_x, gameChar_y - 47, 30, 30);
  rect(gameChar_x - 15, gameChar_y - 47, 30, 22.5);
  triangle(
    gameChar_x - 15,
    gameChar_y - 24.5,
    gameChar_x - 7,
    gameChar_y - 24.5,
    gameChar_x - 25,
    gameChar_y - 9
  ); //first corner
  triangle(
    gameChar_x - 10,
    gameChar_y - 24.5,
    gameChar_x + 2,
    gameChar_y - 24.5,
    gameChar_x - 15,
    gameChar_y - 12.5
  ); //2nd tri
  triangle(
    gameChar_x - 1,
    gameChar_y - 24.5,
    gameChar_x + 11,
    gameChar_y - 24.5,
    gameChar_x + 11,
    gameChar_y - 12.5
  ); //3rd tri
  triangle(
    gameChar_x + 5.8,
    gameChar_y - 24.5,
    gameChar_x + 14.8,
    gameChar_y - 24.5,
    gameChar_x + 23,
    gameChar_y - 9
  ); //4THcorner tri

  //filler rect to hide stroke

  noStroke();
  fill("a9a9a9");
  rect(gameChar_x - 14.15, gameChar_y - 49, 28, 27.9);

  //eyes

  fill(0);
  noStroke();
  circle(gameChar_x - 6.5, gameChar_y - 47, 6);
  circle(gameChar_x + 5.5, gameChar_y - 47, 6);

  //mouth

  rect(gameChar_x - 10, gameChar_y - 37, 19, 1);
  stroke(0);
  strokeWeight(0.8);
  fill(255, 0, 0);
  triangle(
    gameChar_x + 8.5,
    gameChar_y - 36,
    gameChar_x + 6.5,
    gameChar_y - 33,
    gameChar_x + 4.5,
    gameChar_y - 36
  );
  triangle(
    gameChar_x - 5.5,
    gameChar_y - 36,
    gameChar_x - 7.5,
    gameChar_y - 33,
    gameChar_x - 9.5,
    gameChar_y - 36
  );

  //BLOOD

  //bottom half of blood (circle)

  fill(255, 0, 0);
  stroke("#740707");
  strokeWeight(1.1);
  circle(gameChar_x + 7, gameChar_y - 25, 1.5);

  //top half of blood (triangle ish shape)
  push();
  beginShape();
  translate(gameChar_x - 43, gameChar_y - 138);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(190 / 3.8, 203 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  endShape();
  pop();

  //white blood shade

  fill(255);
  noStroke();
  ellipse(gameChar_x + 7.5, gameChar_y - 25, 1, 1.5);

  //shade for ghost

  push();
  fill(0, 0, 0, 50);
  translate(gameChar_x - 43, gameChar_y - 137);
  beginShape();
  curveVertex(46, 78);
  curveVertex(46, 78);
  curveVertex(52, 81);
  curveVertex(55, 86);
  curveVertex(55, 86);
  endShape();
  pop();

  //Jumping facing forwards
  stroke(100);
  noFill();
  rect(gameChar_x - 25, gameChar_y - 77, 50, 80);
  noStroke();
  fill(0);

  //END OF CODE2

  text("3. Walking left", 20, 360);

  gameChar_x = 45;
  gameChar_y = 337;
  //CODE3

  stroke(0);
  strokeWeight(1.8);
  fill("a9a9a9");
  ellipse(gameChar_x - 1, gameChar_y - 47, 30, 30);
  rect(gameChar_x - 16, gameChar_y - 47, 30, 22.5);
  triangle(
    gameChar_x - 16,
    gameChar_y - 24.5,
    gameChar_x - 8,
    gameChar_y - 24.5,
    gameChar_x - 16,
    gameChar_y - 15.5
  ); //first corner
  triangle(
    gameChar_x - 11,
    gameChar_y - 24.5,
    gameChar_x + 1,
    gameChar_y - 24.5,
    gameChar_x - 7,
    gameChar_y - 12.5
  ); //2nd tri
  triangle(
    gameChar_x - 2,
    gameChar_y - 24.5,
    gameChar_x + 10,
    gameChar_y - 24.5,
    gameChar_x + 2,
    gameChar_y - 4.5
  ); //3rd tri
  triangle(
    gameChar_x + 4.8,
    gameChar_y - 24.5,
    gameChar_x + 13.8,
    gameChar_y - 24.5,
    gameChar_x + 14,
    gameChar_y - 1
  ); //4THcorner tri

  //filler rect to hide stroke

  noStroke();
  fill("a9a9a9");
  rect(gameChar_x - 15.1, gameChar_y - 49, 28, 27.9);

  //eyes

  fill(0);
  noStroke();
  circle(gameChar_x - 7.5, gameChar_y - 47, 6);
  circle(gameChar_x + 4.5, gameChar_y - 47, 6);

  //mouth

  rect(gameChar_x - 11, gameChar_y - 37, 19, 1);
  stroke(0);
  strokeWeight(0.8);
  fill(255, 0, 0);
  triangle(
    gameChar_x + 7.5,
    gameChar_y - 36,
    gameChar_x + 5.5,
    gameChar_y - 33,
    gameChar_x + 3.5,
    gameChar_y - 36
  );
  triangle(
    gameChar_x - 6.5,
    gameChar_y - 36,
    gameChar_x - 8.5,
    gameChar_y - 33,
    gameChar_x - 10.5,
    gameChar_y - 36
  );

  //BLOOD

  //bottom half of blood (circle)

  fill(255, 0, 0);
  stroke("#740707");
  strokeWeight(1.1);
  circle(gameChar_x + 6, gameChar_y - 25, 1.5);

  //top half of blood (triangle ish shape)

  push();
  beginShape();
  translate(gameChar_x - 44, gameChar_y - 138);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(190 / 3.8, 203 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  endShape();
  pop();

  //white blood shade

  fill(255);
  noStroke();
  ellipse(gameChar_x + 6.35, gameChar_y - 25, 1, 1.5);

  //shade for ghost

  push();
  fill(0, 0, 0, 50);
  translate(gameChar_x - 45, gameChar_y - 137);
  beginShape();
  curveVertex(46, 78);
  curveVertex(46, 78);
  curveVertex(52, 81);
  curveVertex(55, 86);
  curveVertex(55, 86);
  endShape();
  pop();

  //Walking, turned right
  stroke(100);
  noFill();
  rect(220, 265, 50, 80);
  noStroke();
  fill(0);
  text("4. Walking right", 220, 360);

  gameChar_x = 245;
  gameChar_y = 337;
  //Add your code here ...

  //triangles (left to right)

  stroke(0);
  strokeWeight(2);
  fill("a9a9a9");
  ellipse(gameChar_x, 90 + 200, 30, 30);
  rect(gameChar_x - 15, 90 + 200, 30, 22.5);
  triangle(
    gameChar_x - 15,
    gameChar_y - 24.5,
    gameChar_x - 7,
    gameChar_y - 24.5,
    gameChar_x - 15,
    gameChar_y - 1
  ); //first corner
  triangle(
    gameChar_x - 10,
    gameChar_y - 24.5,
    gameChar_x + 2,
    gameChar_y - 24.5,
    gameChar_x - 7,
    gameChar_y - 4.5
  ); //2nd tri
  triangle(
    gameChar_x - 1,
    gameChar_y - 24.5,
    gameChar_x + 9,
    gameChar_y - 24.5,
    gameChar_x + 3,
    gameChar_y - 12.5
  ); //3rd tri
  triangle(
    gameChar_x + 5.8,
    gameChar_y - 24.5,
    gameChar_x + 14.8,
    gameChar_y - 24.5,
    gameChar_x + 14.7,
    gameChar_y - 15.5
  ); //4THcorner tri

  //filler rect to hide stroke

  noStroke();
  fill("a9a9a9");
  rect(gameChar_x - 14.15, gameChar_y - 49, 28, 27.9);

  //eyes

  fill(0);
  noStroke();
  circle(gameChar_x - 6.5, gameChar_y - 47, 6);
  circle(gameChar_x + 5.5, gameChar_y - 47, 6);

  //mouth

  rect(gameChar_x - 10, gameChar_y - 37, 19, 1);
  stroke(0);
  strokeWeight(0.8);
  fill(255, 0, 0);
  triangle(
    gameChar_x + 8.5,
    gameChar_y - 36,
    gameChar_x + 6.5,
    gameChar_y - 33,
    gameChar_x + 4.5,
    gameChar_y - 36
  );
  triangle(
    gameChar_x - 5.5,
    gameChar_y - 36,
    gameChar_x - 7.5,
    gameChar_y - 33,
    gameChar_x - 9.5,
    gameChar_y - 36
  );

  //BLOOD

  //bottom half of blood (circle)

  fill(255, 0, 0);
  stroke("#740707");
  strokeWeight(1.1);
  circle(gameChar_x + 7, gameChar_y - 25, 1.5);

  //top half of blood (triangle ish shape)
  push();
  beginShape();
  translate(gameChar_x - 43, gameChar_y - 138);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(190 / 3.8, 203 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  endShape();
  pop();

  //white blood shade

  fill(255);
  noStroke();
  ellipse(gameChar_x + 7.5, gameChar_y - 25, 1, 1.5);

  //shade for ghost

  push();
  fill(0, 0, 0, 50);
  translate(gameChar_x - 43, gameChar_y - 137);
  beginShape();
  curveVertex(46, 78);
  curveVertex(46, 78);
  curveVertex(52, 81);
  curveVertex(55, 86);
  curveVertex(55, 86);
  endShape();
  pop();

  //Jumping right
  stroke(100);
  noFill();
  rect(20, 460, 50, 80);
  noStroke();
  fill(0);
  text("5. Jumping to the right", 20, 560);

  gameChar_x = 45;
  gameChar_y = 537;
  //Add your code here ...

  stroke(0);
  strokeWeight(1.8);
  fill("a9a9a9");
  ellipse(gameChar_x - 1, gameChar_y - 47, 30, 30);
  rect(gameChar_x - 16, gameChar_y - 47, 30, 22.5);
  triangle(
    gameChar_x - 16,
    gameChar_y - 24.5,
    gameChar_x - 8,
    gameChar_y - 24.5,
    gameChar_x - 36,
    gameChar_y - 1
  ); //first corner
  triangle(
    gameChar_x - 11,
    gameChar_y - 24.5,
    gameChar_x - 1,
    gameChar_y - 24.5,
    gameChar_x - 25,
    gameChar_y - 2.5
  ); //2nd tri
  triangle(
    gameChar_x - 2,
    gameChar_y - 24.5,
    gameChar_x + 10,
    gameChar_y - 24.5,
    gameChar_x + 15,
    gameChar_y - 11
  ); //3rd tri
  triangle(
    gameChar_x - 4.8,
    gameChar_y - 24.5,
    gameChar_x + 13.8,
    gameChar_y - 24.5,
    gameChar_x + 25,
    gameChar_y - 13
  ); //4THcorner tri

  //filler rect to hide stroke

  noStroke();
  fill("a9a9a9");
  rect(gameChar_x - 15.1, gameChar_y - 49, 28, 27.9);

  //eyes

  fill(0);
  noStroke();
  circle(gameChar_x - 7.5, gameChar_y - 47, 6);
  circle(gameChar_x + 4.5, gameChar_y - 47, 6);

  //mouth

  rect(gameChar_x - 11, gameChar_y - 37, 19, 1);
  stroke(0);
  strokeWeight(0.8);
  fill(255, 0, 0);
  triangle(
    gameChar_x + 7.5,
    gameChar_y - 36,
    gameChar_x + 5.5,
    gameChar_y - 33,
    gameChar_x + 3.5,
    gameChar_y - 36
  );
  triangle(
    gameChar_x - 6.5,
    gameChar_y - 36,
    gameChar_x - 8.5,
    gameChar_y - 33,
    gameChar_x - 10.5,
    gameChar_y - 36
  );

  //BLOOD

  //bottom half of blood (circle)

  fill(255, 0, 0);
  stroke("#740707");
  strokeWeight(1.1);
  circle(gameChar_x + 6, gameChar_y - 25, 1.5);

  //top half of blood (triangle ish shape)

  push();
  beginShape();
  translate(gameChar_x - 44, gameChar_y - 138);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(190 / 3.8, 203 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  endShape();
  pop();

  //white blood shade

  fill(255);
  noStroke();
  ellipse(gameChar_x + 6.35, gameChar_y - 25, 1, 1.5);

  //shade for ghost

  push();
  fill(0, 0, 0, 50);
  translate(gameChar_x - 45, gameChar_y - 137);
  beginShape();
  curveVertex(46, 78);
  curveVertex(46, 78);
  curveVertex(52, 81);
  curveVertex(55, 86);
  curveVertex(55, 86);
  endShape();
  pop();

  //Jumping to the left
  stroke(100);
  noFill();
  rect(220, 460, 50, 80);
  noStroke();
  fill(0);
  text("6. Jumping to the left", 220, 560);

  gameChar_x = 245;
  gameChar_y = 537;
  //Add your code here ...

  //triangles (left to right)

  stroke(0);
  strokeWeight(2);
  fill("a9a9a9");
  ellipse(gameChar_x, gameChar_y - 47, 30, 30);
  rect(gameChar_x - 15, gameChar_y - 47, 30, 22.5);
  triangle(
    gameChar_x - 15,
    gameChar_y - 24.5,
    gameChar_x - 7,
    gameChar_y - 24.5,
    gameChar_x - 24,
    gameChar_y - 17.5
  ); //first corner
  triangle(
    gameChar_x - 10,
    gameChar_y - 24.5,
    gameChar_x + 2,
    gameChar_y - 24.5,
    gameChar_x - 16,
    gameChar_y - 14.5
  ); //2nd tri
  triangle(
    gameChar_x,
    gameChar_y - 24.5,
    gameChar_x + 11,
    gameChar_y - 24.5,
    gameChar_x + 17,
    134.5 + 400
  ); //3rd tri
  triangle(
    gameChar_x + 5.8,
    gameChar_y - 24.5,
    gameChar_x + 14.8,
    gameChar_y - 24.5,
    gameChar_x + 27,
    gameChar_y - 1
  ); //4THcorner tri

  //filler rect to hide stroke

  noStroke();
  fill("a9a9a9");
  rect(gameChar_x - 14.15, gameChar_y - 49, 28, 27.9);

  //eyes

  fill(0);
  noStroke();
  circle(gameChar_x - 6.5, gameChar_y - 47, 6);
  circle(gameChar_x + 5.5, gameChar_y - 47, 6);

  //mouth

  rect(gameChar_x - 10, gameChar_y - 37, 19, 1);
  stroke(0);
  strokeWeight(0.8);
  fill(255, 0, 0);
  triangle(
    gameChar_x + 8.5,
    gameChar_y - 36,
    gameChar_x + 6.5,
    gameChar_y - 33,
    gameChar_x + 4.5,
    gameChar_y - 36
  );
  triangle(
    gameChar_x - 5.5,
    gameChar_y - 36,
    gameChar_x - 7.5,
    gameChar_y - 33,
    gameChar_x - 9.5,
    gameChar_y - 36
  );

  //BLOOD

  //bottom half of blood (circle)

  fill(255, 0, 0);
  stroke("#740707");
  strokeWeight(1.1);
  circle(gameChar_x + 7, gameChar_y - 25, 1.5);

  //top half of blood (triangle ish shape)
  push();
  beginShape();
  translate(gameChar_x - 43, gameChar_y - 138);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(194.5 / 3.8, 215.5 / 1.9151);
  curveVertex(190 / 3.8, 203 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  curveVertex(185 / 3.8, 215.5 / 1.9151);
  endShape();
  pop();

  //white blood shade

  fill(255);
  noStroke();
  ellipse(gameChar_x + 7.5, gameChar_y - 25, 1, 1.5);

  //shade for ghost

  push();
  fill(0, 0, 0, 50);
  translate(gameChar_x - 43, gameChar_y - 137);
  beginShape();
  curveVertex(46, 78);
  curveVertex(46, 78);
  curveVertex(52, 81);
  curveVertex(55, 86);
  curveVertex(55, 86);
  endShape();
  pop();
}
