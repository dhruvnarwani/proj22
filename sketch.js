var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	
	var ground_property ={
    isStatic : true
	}

	var package_property ={
	 restitution : '0.5',
	 isStatic : true
		
		}
		
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	line1 = createSprite(300, 620, 20, 100);
	line1.shapeColor = "red";
	line2 = createSprite(500, 620, 20, 100);
	line2.shapeColor = "red";
	line3 = createSprite(400, 650, 200, 20);
	line3.shapeColor = "red";
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10,);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_property);
 	World.add(world, ground);

	 packageBody = Bodies.circle(width/2 , 200 , 5 , package_property);
	World.add(world, packageBody);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();

  keyPressed();

  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    packageBody.velocityX = 1;
	Matter.Body.setStatic(packageBody,false);
  }
}



