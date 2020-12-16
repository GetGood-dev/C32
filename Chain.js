class chain{
    constructor(bodyA, b){
        var options = {
            bodyA: bodyA,
            pointB: b,
            stiffness: 0.04,
            length: -5
        }
        this.chain = Constraint.create(options);
        this.pointB = b;
        World.add(world, this.chain);
    }

    fly()
    {
        this.chain.bodyA=null;
    }

    display(){
        strokeWeight(4);
        if(this.chain.bodyA)
        {
          push();
          var pointA = this.chain.bodyA.position;
          stroke("cyan");
          line(pointA.x,pointA.y, this.pointB.x,this.pointB.y);
          pop();
        }
    }  
}