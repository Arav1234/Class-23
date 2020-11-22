
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  
  ground =  new Ground(200,380,400,20);
  box=new Box(200,200,50,50);
  box1= new Box(220,150,30,20);
  
ball = new Ball(100,100,25);
  
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
box.display();
box1.display();
  ball.display();


}