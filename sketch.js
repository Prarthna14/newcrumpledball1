
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(50,650,25);

ground1=new ground(350,695,800,10);

    box1=new crate(600,680,200,20);
	

	box2=new crate(500,640,20,100);
	

	box3=new crate(700,640,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-100});
	}
}


