var cat,catImg,catImg2,catImg3,catImg4,cat_running;
var mouse,mouseImg,mouseImg2,mouseImg3,mouseImg4;
var backgroundImg;

function preload() {
    catImg=loadAnimation("cat1.png");
    catImg4=loadAnimation("cat4.png");
    mouseImg=loadAnimation("mouse1.png");
    mouseImg4=loadAnimation("mouse4.png");
    backgroundImg=loadImage("garden.png");
    cat_running=loadAnimation("cat2.png","cat3.png");
    mouse_teasing=loadAnimation("mouse2.png", "mouse3.png" );
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(700,500,30,30);
    cat.addAnimation("catStanding",catImg);
    mouse=createSprite(700,200,20,20);
    mouse.addAnimation("mouseStanding",mouseImg);

}

function draw() {

    background("backgroundImg");
    if(cat.x-mouse.x <(cat.width-mouse.width/2)){
        cat.changeAnimation("catLastImage", catImg4)
        cat.velocityX=0;
        mouse.changeAnimation("mouseLastImage",mouseImg4);
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode=== LEFT_ARROW){
      cat.velocityX= -5;
      cat.changeAnimation("catRunning",cat_running);
      mouse.changeAnimation("teasing",mouse_teasing);
  }
}
