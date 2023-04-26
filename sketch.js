const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var background_image;

var tower;

function preload(){

  background_image = loadImage("./assets/background.gif");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  //creating tower objects
  tower = new Tower(150,350,160,310);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  image(background_image,0,0,width,height);
  
  tower.display();


}

