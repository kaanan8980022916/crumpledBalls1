class dustbin{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.bodyleft= Bodies.rectangle(x,y,20,100,options); 
        this.bodyright= Bodies.rectangle(x+200,y,20,100,options); 
        this.bodydown= Bodies.rectangle(x+100,y+50,220,20,options);

    World.add(world,this.bodyleft);
    World.add(world,this.bodyright);
    World.add(world,this.bodydown);
    
    }
    display(){
        fill("red");
        rectMode(CENTER);
        rect(this.bodyleft.position.x, this.bodyleft.position.y, 20, 100); 
        rect(this.bodyright.position.x, this.bodyright.position.y, 20, 100); 
        rect(this.bodydown.position.x, this.bodydown.position.y, 220, 20);
    }
}