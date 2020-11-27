
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrained = Matter.Constraint;

var ground;
var ball;
var block1,block2,block3,block4,block5;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(400,490,800,25)
    ball = new Ball(300,350,25);
    block1 = new Block(600,475,50,50);
    block2 = new Block(600,425,50,50);
    block3 = new Block(600,375,50,50);
    block4 = new Block(600,325,50,50);
    block5 = new Block(600,275,50,50);
    rope = new Rope({x:300,y:25},ball.body);
    Engine.run(engine);
  
}


function draw() {
  background("cyan");
  ground.display();
  ball.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});

}

function mouseReleased(){
    Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
}





