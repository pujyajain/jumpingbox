var canvas,fixedSprite1,fixedSprite2,fixedSprite3,fixedSprite4;
var music,movingSprite,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   movingSprite=createSprite(random(20,750),300,20,20)
   movingSprite.shapeColor="white"
   movingSprite.velocityX=3
   movingSprite.velocityY=3

   fixedSprite1 = createSprite(100,500,50,25)
   fixedSprite1 .shapeColor="blue"

   fixedSprite2 = createSprite(200,500,50,25)
   fixedSprite2 .shapeColor="pink"

   fixedSprite3  = createSprite(300,500,50,25)
   fixedSprite3 .shapeColor="yellow"

   fixedSprite4  = createSprite(400,500,50,25)
   fixedSprite4 .shapeColor="green"

    
}

function draw() {
    background(rgb(169,169,169));
   edges = createEdgeSprites()
   movingSprite.bounceOff(edges)

   if(fixedSprite1.isTouching(movingSprite)&& movingSprite.bounceOff(fixedSprite1)){
       movingSprite.shapeColor="blue";
       music.play();
   }
   if(fixedSprite3.isTouching(movingSprite)&& movingSprite.bounceOff(fixedSprite3)){
    movingSprite.shapeColor="yellow";
    music.play();
}
if(fixedSprite4.isTouching(movingSprite)&& movingSprite.bounceOff(fixedSprite4)){
    movingSprite.shapeColor="green";
    music.play();
}
if(fixedSprite2.isTouching(movingSprite)){
movingSprite.shapeColor="pink";
movingSprite.velocityX=0
movingSprite.velocityY=0
music.stop();
}
   drawSprite()

   
}
