class Bob{
  constructor(x , y,diameter){
      var options={
          isStatic:false,
          friction:0,
          rescitution:1,
          density:8
      }
  this.body=Bodies.circle(x,y,diameter/1.8,options) 
  this.diameter=diameter
this.diameter=diameter*1
  
  World.add(world,this.body);
  this.image=loadImage("Metal-Ball-PNG-715x715-removebg-preview.png")



  
  
  }
  
  display(){
      var pos=this.body.position
      var  angle=this.body.angle
      push()
      
      rectMode(CENTER)
      stroke("black")
      strokeWeight(4)
      
      circle(this.body.position.x,this.body.position.y,this.diameter+10,this.diameter+10);
      pop()
  }
  
  }