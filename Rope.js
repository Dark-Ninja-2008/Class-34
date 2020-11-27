class Rope{
    constructor(pointA,bodyB){

    var options ={
    pointA:pointA,
    bodyB:bodyB,
    stiffness:0.0002,
    length:20,
    }
    this.pointA = pointA;
    this.rope1=Constrained.create(options);
    World.add(world,this.rope1);
}

    display(){
    var pointB = this.rope1.bodyB.position
    strokeWeight(2);
    line(this.pointA.x,this.pointA.y,pointB.x,pointB.y);
}
}
