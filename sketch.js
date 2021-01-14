const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5;
var stone, tree, ground;
var boy;
var launcher;

function preload() {
	boyImg = loadImage("Plucking mangoes/boy.png");
	stoneImg = loadImage("Plucking mangoes/stone.png");
	mangoImg = loadImage("Plucking mangoes/mango.png");
	treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200,800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,780,1200,40);

	/*boy = createSprite(200,700,75,150);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	*/

	stone = new Stone(150,660,60,60);
	tree = new Tree(700,450,650,650)

	mango1 = new Mango(650,420);
	mango2 = new Mango(575,300);
	mango3 = new Mango(775,200);
	mango4 = new Mango(900,275);
	mango5 = new Mango(800,375);

	launcher=new Launcher(stone.body,{x:150,y:660})
	Engine.run(engine);
}


function draw() {
  background("lightblue");
  
  image(boyImg, 200, 700, 75, 150);
  ground.display();
  stone.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  
  drawSprites();

  launcher.display();
  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
  detectollision(stone,m6);
  detectollision(stone,m7);
  detectollision(stone,m8);
  detectollision(stone,m9);
  detectollision(stone,m10);
  detectollision(stone,m11);
  detectollision(stone,m12);
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased() {
  launcher.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
    launcher.attach(stone.body);
  }
}

function detectollision(lstone,lmango) {
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r) {
      Matter.Body.setStatic(lmango.body,false);
    }
}
