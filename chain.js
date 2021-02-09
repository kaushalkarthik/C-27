class Chain {
    constructor(birdA,logB){
        var options = {
            bodyA:birdA,
            bodyB:logB,
            stiffness:0.05,
            length:3,
        }
        this.j=Constraint.create(options)
        World.add(world,this.j)
    }
        display(){
            var pointA=this.j.bodyA.position
            var pointB=this.j.bodyB.position
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            
        }
}