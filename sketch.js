
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(650,200,500,25)
	bob1 = new Bob(450,700,diameter=100)
	bob2 = new Bob(550,700,diameter=100)
	box = new Ground(450,200,50,20)
	box1 = new Ground(550,200,50,20)
	box2 = new Ground(650,200,50,20)
	box3 = new Ground(750,200,50,20)
	box4 = new Ground(850,200,50,20)

    rope1 = new Rope(bob2.body,box1.body,0,0)
	bob3 = new Bob(650,700,100)
	bob4 = new Bob(750,700,100)
	bob5 = new Bob(850,700,100)
	rope2 = new Rope(bob1.body,box.body,0,0)
	rope3 = new Rope(bob3.body,box2.body,0,0)
	rope4 = new Rope(bob4.body,box3.body,0,0)
	rope5 = new Rope(bob5.body,box4.body,0,0)


	Engine.run(engine);
  
}


function draw() {
	console.log(rope2,rope3)

  rectMode(CENTER);
  background("green");
  ground.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  box.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  drawSprites();
 keyPreesed()
}

function keyPreesed(){
	
if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-850,y:0})

}
if(keyCode === LEFT_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:1000,y:0})

}
}
