
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,500,800,22)
paper=new Paper(50,100,30)
db1=new Dustbin(400,440,20,100)
db2=new Dustbin(600,440,20,100)
db3=new Dustbin(500,440,220,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 ground.display()
 paper.display()
 db1.display()
 db2.display()
 db3.addImage()
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})



}

}


