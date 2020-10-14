
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper ;
var lineSprite1,lineSprite2,lineSprite3,groundSprite;
var lineBody1,lineBody2,lineBody3,groundBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=createSprite(400,660,1200,30);
	papper = createSprite(60,620,40,40);

	lineSprite1=createSprite(620,640, 160,20);
	lineSprite2=createSprite(540,580,20,130);
	lineSprite3=createSprite(700,580, 20,130);

	lineBody1 = Bodies.rectangle(620,640, 160,20, {restitution:0.5, isStatic:true});
	World.add(world, lineBody1);

	lineBody2 = Bodies.rectangle( 540,580,20,130, {restitution:0.5, isStatic:true});
	World.add(world, lineBody2);

	lineBody3 = Bodies.rectangle( 700,580, 20,130, {restitution:0.5, isStatic:true});
	World.add(world, lineBody3);

	groundBody = Bodies.rectangle( 400,660, 1200,30, {isStatic:true});
	World.add(world, groundBody);

	papperBody = Bodies.rectangle( 60,620,40,40, { isStatic:false,restitution:0.3,friction:0.5,density:1.2});
	World.add(world, papperBody);

lineSprite1. shapeColor= "red" ;
lineSprite2. shapeColor= "red" ;
lineSprite3. shapeColor= "red" ;
papper.shapeColor="white";

World.add(world, ground);

World.add(world, papper);
  
}


function draw() {

	Engine.update(engine);

	lineSprite1.x= lineBody1.position.x 
	lineSprite1.y= lineBody1.position.y 
	
	lineSprite2.x= lineBody2.position.x 
	lineSprite2.y= lineBody2.position.y 

	lineSprite3.x= lineBody3.position.x 
	lineSprite3.y= lineBody3.position.y 

	papper.x= papperBody.position.x 
	papper.y= papperBody.position.y 

  background(0);
  
  drawSprites();
 
}

function keyPressed () {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(papperBody,papperBody.position,{x:85,y:-85});

}


}

