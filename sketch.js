
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
	left =  new dustbin(300, 620, 20, 100);
	right = new dustbin(500, 620, 20, 100);
	base = new dustbin(400, 670, 200, 20);
	ground1 = new Ground(400, height, 800, 40);
	paper1 = new Paper();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  left.display();
  left.display();
  left.display();
  left.display();

  ellipseMode(CENTER);
  paper1.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(paper1.Body,paper1.body.position,{x:85,y:-85});

	}
}