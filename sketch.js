
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground=Bodies.rectangle(400,690,400,10,ground_options);
	World.add(world,ground);

	ball = Bodies.circle(250,0,20);
	World.add(world,ball);
	
	rect1 = Bodies.rectangle(600,630.5,20,70, 
		{isStatic:true} );
	   World.add(world, rect1);
	
	   console.log(rect1);
	   
	   rect2 = Bodies.rectangle(650,630.5,20,70, 
		{isStatic:true} );
	   World.add(world, rect2);
	fill("blue");
	stroke("black");
	   
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,18,18);

 console.log(rect1.position.x);
 rect(rect1.position.x,rect1.position.y,20,100)
 rect(rect2.position.x,rect2.position.y,20,100)
  drawSprites();
 
}

function keyPressed() {
	
if (keyCode === UP_ARROW) {

	Matter.Body.setStatic(packageBody,false);
	Matter.Body.applyForce(ball.Body,ball.Body.position.x,{x:85,y:-85});
	
}
}
