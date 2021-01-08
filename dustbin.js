class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic :true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
      this.body=Bodies.rectangle(x,y,width,height,options)
      World . add(world,this.body)
      this.width=width
      this.height=height
      this.image=loadImage("dustbingreen.png")
    }
    display(){
    var pos=this.body.position;
    rectMode(CENTER)
    fill ("WHITE")
    rect(pos.x,pos.y,this.width,this.height)
    }
    addImage(){
      var pos=this.body.position;
      imageMode(CENTER)
      fill ("WHITE")
      image(this.image,pos.x,pos.y,250,120)
      }
    }