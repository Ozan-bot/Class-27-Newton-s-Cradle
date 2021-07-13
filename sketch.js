
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Ball(200,400,40,40);
	ball2=new Ball(300,400,40,40);
	ball3=new Ball(400,400,40,40);
    ball4=new Ball(500,400,40,40);
	ball5=new Ball(600,400,40,40);
	roof=new Ground(400,100,600,50);
	rope1=new Rope(ball1.body,roof.body,-80,0)
	rope2=new Rope(ball2.body,roof.body,-80,0)
	rope3=new Rope(ball3.body,roof.body,-80,0)
	rope4=new Rope(ball4.body,roof.body,-80,0)
	rope5=new Rope(ball5.body,roof.body,-80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  
}



