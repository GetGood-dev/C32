class Ball{
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'restitution':1.0,
            'friction':1.0,
            'density':9.0
        }
        this.body = Bodies.polygon(x, y, 6, radius, options);
        this.image = loadImage("sprites/polygon.png")
        this.radius = radius;
        World.add(world, this.body);
      }
      display(r,g,b){
        var angle = this.body.angle;
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(r,g,b);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
      }
}