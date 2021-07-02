
var gameState=0;
var play;
var bgm;

var spaceShip;
var bg,backgroundImg;
var showinfo;


function preload()
{
    spaceShip=loadImage("images/destroyer.png");
    backgroundImg=loadImage("images/bgstart.jpg");
    backg=loadImage("images/bgmain.jpg")
    bgm=loadSound("sound/bgm.mp3");
}

function setup()
{
    createCanvas(900,600);
    

    bg = createSprite(400,310, 900, 600)
    bg.addImage(backgroundImg)
    bg.scale =0.2;
   
    spaceShip=createSprite(400,310,40,40);
    spaceShip.shapeColor="red";
    
}
function draw()
{
    background(0);
    if (gameState === 0)
   {
    spaceShip.visible=false;
    bg.visible=false;
    showinfo();
   }


  

    if (gameState === 1)
     {
       bg.visible=true;
       spaceShip.visible=true;
        play();
       
     } 
    drawSprites();
}
function play()
{
    
    bg.addImage(backg);
    bg.scale=0.4;
    bg.velocityY = 2;
    if (bg.y > 400)
     {
        bg.y = bg.y/2;
     }
  
    
     if(keyIsDown(LEFT_ARROW))
     {
         spaceShip.x = spaceShip.x - 5;
     }
     if(keyIsDown(RIGHT_ARROW))
     {
         spaceShip.x = spaceShip.x + 5;
     }

}

function showinfo()
{
    text("PRESS SPACE TO PLAY",100,300);
    if(keyDown("SPACE"))
    {
        gameState = 1;
    }
    
}