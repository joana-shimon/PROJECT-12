var garden,rabbit;
var gardenImg,rabbitImg;
var apple ,leaf
var appleImage,leafImage
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImage= loadImage("apple.png")
leafImage=loadImage("orangeLeaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//creating apple


//creating leaf




}


function draw() {
  background(0);
  console.log(frameCount)
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  
  rabbit.velocityX=2
  
    rabbit.x=mouseX
  
  
  
  spawnApples()
  spawnLeaf()
drawSprites()}

//function to spawn aplles
function  spawnApples (){

  if(frameCount % 80=== 0){
    apple=createSprite(400,10,400,400)
    apple.addImage("apple", appleImage)
    apple.x=Math.round(random(10,380))
    apple.scale=0.05
   apple.velocityY = 3
   apple.lifetime=150
   }
  }


  
function spawnLeaf(){



  if(frameCount % 100 === 0){
    leaf=createSprite(200,10,10,40)
    leaf.addImage("leaf", leafImage)
    leaf.x=Math.round(random(20,400))
    leaf.scale=0.05
    leaf.velocityY = 3
leaf.lifetime=150

  }
}











    
    

  
    






























