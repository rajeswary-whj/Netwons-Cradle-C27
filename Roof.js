class Roof{
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400,100,300,10,options);
        World.add(myWorld, this.body);
        this.width = 300;
        this.height = 10;
    }
    display() {
        fill("yellow");
       // rectMode(CENTER);
         rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}