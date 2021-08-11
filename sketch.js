
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1;
var ground1,paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

d1 = new dustbin(500,320);
ground1 = new ground(400,390,800,20);
paper1 = new paper(100,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  d1.display();
  ground1.display();
  paper1.display();
 
  if(keyWentDown("UP_ARROW")) { 
	  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:55, y:-55});
	 }
}



