class Ball{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':0.5,
            'friction':1.0,
            'density':2.8,
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = radius;

        World.add(world, this.body);
      }
      display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0, 0, this.radius,this.radius);
        pop();
      }
}