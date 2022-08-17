
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundobj,leftside,rightside
var world
var radius=40

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.5,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)

	Engine.run(engine);

	groundobj=new Ground(width/2,670,width,20)

	leftside=new Ground(1100,600,20,120)
	rightside=new Ground(1350,600,20,120)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ellipse(ball.position.x,ball.position.y,radius,radius,radius)

  groundobj.display()
  leftside.display()
  rightside.display()
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


