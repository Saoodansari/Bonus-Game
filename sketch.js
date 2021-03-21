var canvas, backgroundImage, playerImg;
var player, greenNpc, purpleNpc, whiteNpc, redNpc;
var bonus1Img, bonus2Img;
var point1Img, point2Img, point3Img, point4Img, point5Img;
var greenNpcImg, purpleNpcImg, redNpcImg, whiteNpcImg;
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20;
var p11, p12, p21, p22, p31, p32, p4, p5;
var b1, b2;
var score = 0;
var gameState = "play";

function preload(){
  backgroundImage = loadImage("../images/background.jpg");
  playerImg = loadImage("../images/Player.png");
  bonus1Img = loadImage("../images/bonus1.png");
  bonus2Img = loadImage("../images/bonus2.png");
  point1Img = loadImage("../images/point1.png");
  point2Img = loadImage("../images/point2.png");
  point3Img = loadImage("../images/point3.png");
  point4Img = loadImage("../images/point4.png");
  point5Img = loadImage("../images/point5.png");
  greenNpcImg = loadImage("../images/greenNpc.png");
  purpleNpcImg = loadImage("../images/purpleNpc.png");
  whiteNpcImg = loadImage("../images/whiteNpc.png");
  redNpcImg = loadImage("../images/redNpc.png");
}

function setup(){
  createCanvas(1500,700);

  p11 = createSprite(150,150);
  p11.addImage(point1Img);
  p11.scale = 0.25;

  p12 = createSprite(1150,300);
  p12.addImage(point1Img);
  p12.scale = 0.25;

  p21 = createSprite(150,600);
  p21.addImage(point2Img);
  p21.scale = 0.25;

  p22 = createSprite(950,150);
  p22.addImage(point2Img);
  p22.scale = 0.25;

  p31 = createSprite(550,150);
  p31.addImage(point3Img);
  p31.scale = 0.25;

  p32 = createSprite(1200,600);
  p32.addImage(point3Img);
  p32.scale = 0.25;

  p4 = createSprite(1350,150);
  p4.addImage(point4Img);
  p4.scale = 0.25;

  p5 = createSprite(750,300);
  p5.addImage(point5Img);
  p5.scale = 0.25;

  b1 = createSprite(350,450);
  b1.addImage(bonus1Img);
  b1.scale = 0.5;

  b2 = createSprite(700,600);
  b2.addImage(bonus2Img);
  b2.scale = 0.5;

  player = createSprite(150,150);
  player.addImage(playerImg);
  player.scale = 0.2;

  redNpc = createSprite(700,150);
  redNpc.addImage(redNpcImg);
  redNpc.scale = 0.5;
  redNpc.velocityX = 5;

  greenNpc = createSprite(700,300);
  greenNpc.addImage(greenNpcImg);
  greenNpc.scale = 0.5;
  greenNpc.velocityX = -5;

  whiteNpc = createSprite(700,450);
  whiteNpc.addImage(whiteNpcImg);
  whiteNpc.scale = 0.5;
  whiteNpc.velocityX = 5;

  purpleNpc = createSprite(700,600);
  purpleNpc.addImage(purpleNpcImg);
  purpleNpc.scale = 0.5;
  purpleNpc.velocityX = -5;
  
  w1 = createSprite(750, 100, 1300, 10);
  w2 = createSprite(750, 660, 1300, 10);
  w3 = createSprite(100, 380, 10, 570);
  w4 = createSprite(1400, 380, 10, 570);
  
  w5 = createSprite(350, 230, 250, 10);
  w6 = createSprite(750, 230, 250, 10);
  w7 = createSprite(1150, 230, 250, 10);
  w8 = createSprite(550, 380, 250, 10);
  
  w9 = createSprite(950, 380, 250, 10);
  w10 = createSprite(350, 530, 250, 10);
  w11 = createSprite(750, 530, 250, 10);
  w12 = createSprite(1150, 530, 250, 10);

  w13 = createSprite(1220, 305, 10, 150);
  w14 = createSprite(300, 450, 10, 150);
  w15 = createSprite(620, 580, 10, 150);
  w16 = createSprite(880, 180, 10, 150);

  w17 = createSprite(650, 300, 10, 150);
  w18 = createSprite(1050, 450, 10, 150);
  
  w1.shapeColor = "orange";
  w2.shapeColor = "orange";
  w3.shapeColor = "orange";
  w4.shapeColor = "orange";
  w5.shapeColor = "orange";
  w6.shapeColor = "orange";
  w7.shapeColor = "orange";
  w8.shapeColor = "orange";
  w9.shapeColor = "orange";
  w10.shapeColor = "orange";
  w11.shapeColor = "orange";
  w12.shapeColor = "orange";
  w13.shapeColor = "orange";
  w14.shapeColor = "orange";
  w15.shapeColor = "orange";
  w16.shapeColor = "orange";
  w17.shapeColor = "orange";
  w18.shapeColor = "orange";
  
}

function draw(){
 background(backgroundImage);
 fill("black");
 textSize(30);
 text("SAOOD'S GAME", 650, 50);

 if(gameState === "play"){
  if(keyDown("left")){
    player.x = player.x - 2;
  }
 
  if(keyDown("right")){
   player.x = player.x + 2;
   }
 
   if(keyDown("up")){
     player.y = player.y - 2;
   }
 
   if(keyDown("down")){
     player.y = player.y + 2;
   }
 }
 

  redNpc.bounceOff(w3);
  redNpc.bounceOff(w4);
  greenNpc.bounceOff(w3);
  greenNpc.bounceOff(w4);
  whiteNpc.bounceOff(w3);
  whiteNpc.bounceOff(w4);
  purpleNpc.bounceOff(w3);
  purpleNpc.bounceOff(w4);
  
  player.bounceOff(w1);
  player.bounceOff(w2);
  player.bounceOff(w3);
  player.bounceOff(w4);
  player.bounceOff(w5);
  player.bounceOff(w6);
  player.bounceOff(w7);
  player.bounceOff(w8);
  player.bounceOff(w9);
  player.bounceOff(w10);
  player.bounceOff(w11);
  player.bounceOff(w12);
  player.bounceOff(w13);
  player.bounceOff(w14);
  player.bounceOff(w15);
  player.bounceOff(w16);
  player.bounceOff(w17);
  player.bounceOff(w18);
  
  if(player.isTouching(p11)){
    score = score + 1;
    p11.destroy();
  }

  if(player.isTouching(p12)){
    score = score + 1;
    p12.destroy();
  }

  if(player.isTouching(p21)){
    score = score + 2;
    p21.destroy();
  }

  if(player.isTouching(p22)){
    score = score + 2;
    p22.destroy();
  }

  if(player.isTouching(p31)){
    score = score + 3;
    p31.destroy();
  }

  if(player.isTouching(p32)){
    score = score + 3;
    p32.destroy();
  }

  if(player.isTouching(p4)){
    score = score + 4;
    p4.destroy();
  }

  if(player.isTouching(p5)){
    score = score + 5;
    p5.destroy();
  }

  if(player.isTouching(b1)){
    score = score + 10;
    b1.destroy();
  }

  if(player.isTouching(b2)){
    score = score + 15;
    b2.destroy();
  }
  
  drawSprites(); 

  textSize(20);
  fill("white");
  text("SCORE : " + score, 1200, 70);

  if(player.isTouching(redNpc)||
  player.isTouching(purpleNpc)||
  player.isTouching(whiteNpc)||
  player.isTouching(greenNpc)){
    gameState = "end";
    textSize(30);
    fill("red");
    text("GAME OVER", 700, 350);
    player.velocityX = 0;
    greenNpc.velocityX = 0;
    redNpc.velocityX = 0;
    whiteNpc.velocityX = 0;
    purpleNpc.velocityX = 0;
  }
}
