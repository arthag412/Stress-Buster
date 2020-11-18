var player,house1,house2,house3;
var playerImage,playerImage2,house1Image,house2Image,house3Image;
var Background,backgroundImage;
var gameState=0;
var stress,stressImage;
var playButton,playButtonImg;
var response;
var backButton,backButtonImage;
var Button1,Button2,Button3,Button4,Button5,Button6,Button7,Button8,Button9,Button10;
var Button1i,Button2i,Button3i,Button4i,Button5i,Button6i,Button7i,Button8i,Button9i,Button10i;
var sound1,sound2,sound3,sound3,sound4,sound5,sound6,sound7,sound8,sound9,sound10;
var stopB,stopBi;
var sbutton1,sbutton2,sbutton3,sbutton4,sbutton5;
var sbutton1i,sbutton2i,sbutton3i,sbutton4i,sbutton5i;
var sbuttoni1,sbuttoni2,sbuttoni3,sbuttoni4,sbuttoni5;
var yogaPose,yogaImage;
function preload()
{
  playerImage=loadImage("happydog.JPG");
  playerImage2=loadImage("Stresseddog.JPG");
  house1Image=loadImage("yogaHouse.JPG");
  house2Image=loadImage("MUSICHOUSE.JPG");
  house3Image=loadImage("STORYHOUSE.JPG");
  stressImage=loadImage("coverpage.jpg");
  playButtonImg=loadImage("playbutton.png")
  backButtonImage=loadImage("back.jpg");
  sound1=loadSound("Sound1.mp3");
  yogaImage=loadImage("yogaPose.JPG");
  sound2=loadSound("Sound2.mp3");
  sound3=loadSound("Sound3.mp3");
  sound4=loadSound("Sound4.mp3");
  sound5=loadSound("Sound5.mp3");
  sound6=loadSound("Sound6.mp3");
  sound7=loadSound("Sound7.mp3");
  sound8=loadSound("Sound8.mp3");
  sound9=loadSound("Sound9.mp3"); 
  sound10=loadSound("Sound10.mp3");
  stopBi=loadImage("stopB.JPG");
  Button1i=loadImage("M1.JPG");
  Button2i=loadImage("M2.JPG");
  Button3i=loadImage("M3.JPG");
  Button4i=loadImage("M4.JPG");
  Button5i=loadImage("M5.JPG");
  Button6i=loadImage("M6.JPG");
  Button7i=loadImage("M7.JPG");
  Button8i=loadImage("M8.JPG");
  Button9i=loadImage("M9.JPG");
  Button10i=loadImage("M10.JPG");
  sbutton1i=loadImage("S1.JPG");
  sbutton2i=loadImage("S2.JPG");
  sbutton3i=loadImage("S3.JPG");
  sbutton4i=loadImage("S4.JPG");
  sbutton5i=loadImage("S5.JPG");
  sbuttoni2=loadImage("Story2.JPG");
  sbuttoni3=loadImage("Story3.JPG");
  sbuttoni4=loadImage("Story4.JPG");
  sbuttoni5=loadImage("Story5.JPG");
  sbuttoni1=loadImage("Story1.JPG");
  backgroundImage=loadImage("coverpage.jpg")
  

  
}

function setup() {
  createCanvas(1200, 800);
  Background=createSprite(600,400,50,50);
  Background.addImage(backgroundImage);
  Background.scale=0.7;
  playButton = createSprite(900, 220);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.5;
  backButton=createSprite(50,50,10,10);
  backButton.addImage(backButtonImage);
  backButton.visible=false;
  backButton.scale=0.2;
  Button1=createSprite(200,300,10,10);
  Button1.addImage(Button1i);
  Button2=createSprite(400,300,10,10);
  Button2.addImage(Button2i);
  Button3=createSprite(600,300,10,10);
  Button3.addImage(Button3i);
  Button4=createSprite(800,300,10,10);
  Button4.addImage(Button4i);
  Button5=createSprite(1000,300,10,10);
  Button5.addImage(Button5i);
  Button6=createSprite(200,600,10,10);
  Button6.addImage(Button6i);
  Button7=createSprite(400,600,10,10);
  Button7.addImage(Button7i);
  Button8=createSprite(600,600,10,10);
  Button8.addImage(Button8i);
  Button9=createSprite(800,600,10,10);
  Button9.addImage(Button9i);
  Button10=createSprite(1000,600,10,10);
  Button10.addImage(Button10i);
  stopB=createSprite(600,100,10,10);
  stopB.addImage(stopBi);
  yogaPose=createSprite(600,400,50,50);
  yogaPose.addImage(yogaImage);
  sbutton1=createSprite(300,300,10,10);
  sbutton1.addImage(sbutton1i);
  sbutton2=createSprite(300,700,10,10);
  sbutton2.addImage(sbutton2i);
  sbutton3=createSprite(600,500,10,10);
  sbutton3.addImage(sbutton3i);
  sbutton4=createSprite(900,300,10,10);
  sbutton4.addImage(sbutton4i);
  sbutton5=createSprite(900,700,10,10);
  sbutton5.addImage(sbutton5i);
  player=createSprite(displayWidth/2,displayHeight-150);
  player.addImage(playerImage);
  player.scale=2;
  house1=createSprite((displayWidth/4)*3,displayHeight/4-100);
  house1.addImage(house1Image);
  house2=createSprite(displayWidth/2,displayHeight/4-100);
  house2.addImage(house2Image);
  house3=createSprite(displayWidth/4,displayHeight/4-100);
  house3.addImage(house3Image);
  Background.visible=true;
  Button1.visible=false;
  Button2.visible=false;
  Button3.visible=false;
  Button4.visible=false;
  Button5.visible=false;
  Button6.visible=false;
  Button7.visible=false;
  Button8.visible=false;
  Button9.visible=false;
  Button10.visible=false;
  stopB.visible=false;
  sbutton1.visible=false;
  sbutton2.visible=false;
  sbutton3.visible=false;
  sbutton4.visible=false;
  sbutton5.visible=false;
  yogaPose.visible=false;
  player.visible=false;
  house1.visible=false;
  house2.visible=false;
  house3.visible=false;
  
}


function draw() {
 background("white");
 if (mousePressedOver(playButton)&& gameState===0) {
   player.addImage(playerImage2);
   Background.visible=false;
  play();
}
if (mousePressedOver(house2)) {
  musichouse();

}
if (mousePressedOver(house1)) {
  yogahouse();
}
if (mousePressedOver(house3)) {
  storyhouse();
}
if (mousePressedOver(backButton)) {
  play();
  Button1.visible=false;
  Button2.visible=false;
  Button3.visible=false;
  Button4.visible=false;
  Button5.visible=false;
  Button6.visible=false;
  Button7.visible=false;
  Button8.visible=false;
  Button9.visible=false;
  Button10.visible=false;
  stopB.visible=false;
  sbutton1.visible=false;
  sbutton2.visible=false;
  sbutton3.visible=false;
  sbutton4.visible=false;
  sbutton5.visible=false;
  yogaPose.visible=false;
  sbutton1.addImage(sbutton1i);
  sbutton2.addImage(sbutton2i);
  sbutton3.addImage(sbutton3i);
  sbutton4.addImage(sbutton4i);
  sbutton5.addImage(sbutton5i);
  gameState=2;
  player.addImage(playerImage)
}
if(mousePressedOver(Button1)){
  sound1.play();
  }
  if(mousePressedOver(Button2)){
    sound2.play();
    }
    if(mousePressedOver(Button3)){
      sound3.play();
      }
      if(mousePressedOver(Button4)){
  sound4.play();
  }
  if(mousePressedOver(Button5)){
    sound5.play();
    }
    if(mousePressedOver(Button6)){
      sound6.play();
      }
      if(mousePressedOver(Button7)){
        sound7.play();
        }
        if(mousePressedOver(Button8)){
          sound8.play();
          }
          if(mousePressedOver(Button9)){
            sound9.play();
            }
            if(mousePressedOver(Button10)){
              sound10.play();
              }
  if(mousePressedOver(stopB)){
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound9.stop();
    sound10.stop();
    }
    if(mousePressedOver(sbutton1)){
      sbutton1.addImage(sbuttoni1);
      sbutton2.visible=false;
      sbutton3.visible=false;
       sbutton4.visible=false;
       sbutton5.visible=false;
      }
      if(mousePressedOver(sbutton2)){
        sbutton2.addImage(sbuttoni2);
        sbutton1.visible=false;
      sbutton3.visible=false;
       sbutton4.visible=false;
       sbutton5.visible=false;
        }
        if(mousePressedOver(sbutton3)){
          sbutton3.addImage(sbuttoni3);
          sbutton2.visible=false;
      sbutton1.visible=false;
       sbutton4.visible=false;
       sbutton5.visible=false;
          }
          if(mousePressedOver(sbutton4)){
            sbutton4.addImage(sbuttoni4);
            sbutton2.visible=false;
      sbutton3.visible=false;
       sbutton1.visible=false;
       sbutton5.visible=false;
            }
            if(mousePressedOver(sbutton5)){
              sbutton5.addImage(sbuttoni5);
              sbutton2.visible=false;
      sbutton3.visible=false;
       sbutton4.visible=false;
       sbutton1.visible=false;
              }
  drawSprites();
 
}


function play(){
  playButton.visible = false;
  player.visible=true;
  house1.visible=true;
  house2.visible=true;
  house3.visible=true;
  backButton.visible=false;
  
  gameState=1;

}
function yogahouse(){
  player.visible = false;
  house1.visible = false;
  house2.visible = false;
  house3.visible = false;
  backButton.visible=true;
  yogaPose.visible=true;
  

}
function storyhouse(){
  player.visible = false;
  house1.visible = false;
  house2.visible = false;
  house3.visible = false;
  backButton.visible=true;
  sbutton1.visible=true;
  sbutton3.visible=true;
  sbutton2.visible=true;
  sbutton4.visible=true;
  sbutton5.visible=true;
  
}

function musichouse(){
  player.visible = false;
  house1.visible = false;
  house2.visible = false;
  house3.visible = false;
  backButton.visible=true;
  
  Button1.visible=true;
  Button2.visible=true;
  Button3.visible=true;
  Button4.visible=true;
  Button5.visible=true;
  Button6.visible=true;
  Button7.visible=true;
  Button8.visible=true;
  Button9.visible=true;
  Button10.visible=true;
  stopB.visible=true;
}


