const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var back;
var ball;
var engine, world;
var score=0;
function preload(){
  back=loadImage("Capture.png");
  stone=loadImage("polygon.png");
}



function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;



     Engine.run(engine);
     ground= new Ground();
     stand1= new Stand(390,300,250,10);
     stand2= new Stand(730,200,250,10);

     block1 = new Block(300,275,30,40)
     block2 = new Block(330,275,30,40)
     block3 = new Block(360,275,30,40)
     block4 = new Block(390,275,30,40)
     block5 = new Block(420,275,30,40)
     block6 = new Block(450,275,30,40)
     block7 = new Block(480,275,30,40)
     block8 = new Block(330,235,30,40)
     block9 = new Block(360,235,30,40)
     block10 = new Block(390,235,30,40)
     block11 = new Block(420,235,30,40)
     block12 = new Block(450,235,30,40)
     block13 = new Block(390,195,30,40)
     block14 = new Block(791,135,30,40)
     block15 = new Block(330,195,30,40)
     block16 = new Block(330,155,30,40)

     blocks1 = new Block(641,175,30,40)
     blocks2 = new Block(671,175,30,40)
     blocks3 = new Block(701,175,30,40)
     blocks4 = new Block(731,175,30,40)
     blocks5 = new Block(761,175,30,40)
     blocks6 = new Block(791,175,30,40)
     blocks7 = new Block(821,175,30,40)

     blocks8 = new Block(671,135,30,40)
     blocks9 = new Block(701,135,30,40)
     blocks10 = new Block(731,135,30,40)
     blocks11 = new Block(761,135,30,40)
     //
     blocks12 = new Block(701,95,30,40)
     blocks13 = new Block(731,95,30,40)
     blocks14 = new Block(761,95,30,40)
     
     blocks15 = new Block(731,55,30,40)

    // bgmi = createSprite(450,200,900,400);
     //bgmi.addImage("background",back);
    
     ball=Bodies.circle(50,200,20);
     World.add(world,ball);
     slingshot= new Catapult(this.ball,{x:90,y:180});





}

function draw(){
 
background(back);
textSize(31);
fill("green");
textFont("Futura");
text("FoodFill:"  +score,700,350)
textSize(20);
   textFont("ALGERIAN");
   fill("yellow");
   text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",60,25)

 ground.display();
 stand1.display();
 stand2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
blocks6.display();
blocks7.display();

blocks8.display();
blocks9.display();
blocks10.display();
blocks11.display();

blocks12.display();
blocks13.display();
blocks14.display();

blocks15.display();





block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();

blocks1.score();
blocks2.score();
blocks3.score();
blocks4.score();
blocks5.score();
blocks6.score();
blocks7.score();
blocks8.score();
blocks9.score();
blocks10.score();
blocks11.score();
blocks12.score();
blocks13.score();
blocks14.score();
blocks15.score();


imageMode(CENTER);
image(stone,ball.position.x,ball.position.y,40,40);

slingshot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
  
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.ball);
  }
}  