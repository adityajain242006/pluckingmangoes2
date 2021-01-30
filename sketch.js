
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var mango



function preload()
{
	treeimage=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,675,800,50);
	//tree = new Tree(600,530,200,300)
boy=new Boy(150,600,200,200)
mango=new Mango(530,400,40)
mango2=new Mango(570,380,40)
mango3=new Mango(430,370,40)
mango4=new Mango(590,430,40)
mango5=new Mango(430,360,40)
stone=new Stone(90,550,50)
slingshot=new SlingShot(stone.body,{x:150,y:600})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
 
 
  
 // tree.display()
 detectollision(stone,mango)
 detectollision(stone,mango2)
 detectollision(stone,mango3)
 detectollision(stone,mango4)
 detectollision(stone,mango5)
 imageMode(CENTER)
 ground.display()
 image(treeimage,500,460,500,400)
 boy.display()
 mango.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 stone.display()
 slingshot.display()


 
 
 


 
  
  
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode===32) {
		Matter.Body.setPosition(stone.body ,{x:235,y:420})
		slingshot.attach(stone.body)

	}
}
function detectollision(lstone,lmango){
	mangoBodyposition=lmango.body.position
	stoneBodyposition=lstone.body.position
	var distance=dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.body.setStatic(lmango.body,false)
	}
}
function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
    slingshot.fly();
    
}

