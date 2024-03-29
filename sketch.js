const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
   ground = new Ground(200,390,400,10);
   box1 = new Box(200,100,50,70);
   box2= new Box(220,140,50,30);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
}