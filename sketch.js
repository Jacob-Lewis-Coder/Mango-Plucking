
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var treeImage, boyImage;

function preload(){
	//load tree image and boy image
	treeImage = loadImage("tree.png");
	boyImage = loadImage("Boy.png");
}

function setup() {
	createCanvas(1366, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Boy Sprite and add the image

	boy = createSprite(200,720,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.1

	//Create Tree Sprite and add the image
	tree = createSprite(900,480,20,20);
	tree.addImage(treeImage)
	tree.scale = 0.5

	
	//Create Ground object 

    ground = new Ground()
	

	//create 10 mango objects, mango1 to mango10
	mango1 = new Mango(800, 218, 50);
	mango2 = new Mango(850, 270, 50);
	mango3 = new Mango(900, 218, 50);
	mango4 = new Mango(950, 300, 50);
	mango5 = new Mango(900, 350, 50);
	mango6 = new Mango(850, 400, 50);
	mango7 = new Mango(800, 350, 50);
	mango8 = new Mango(710, 360, 50);
	mango9 = new Mango(750, 430, 50)
	mango10 = new Mango(1050, 310, 50);
	mango11 = new Mango(1000, 400, 50);
	mango12 = new Mango(1090, 390, 50);


	//Create stone object
	stone = new Stone(200, 200);

	slingshot = new Sling(stone.body, {x : 150, y : 664});
	
	//Create sling object by passing stone body and points(x,y)
	
	//Engine.run(engine);
  
}


function draw() {
  background("white");
  drawSprites();
  Engine.update(engine)
  

  //Display Ground,Mangos,stone,sling

  //detect collision between stone and all the mangoes using detectcollision()

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  ground.display();

  slingshot.display();

  stone.display();
  
 fill("black");
 text(mouseX + "," + mouseY, mouseX, mouseY);

}

function mouseDragged(){
	//Use Matter.Body.setPosition to set the position of the stone
	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
	slingshot.fly();
}

function detectCollision(stone_arg,mango_arg){
	//Detect collision using the function mentioned in pdf
	var stone_position = stone_arg.body.position;
	var mango_position = mango_arg.body.position;
	var distance = dist(stone_position.x, stone_position.y, mango_position.x, mango_position.y);
    if(distance <= 80){
		Matter.Body.setStatic(mango_arg.body, false);
	} 
}

function keyPressed(){
	if(keyCode === 32){
		slingshot.attach(stone.body)
	}
}
