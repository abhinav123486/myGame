class connect{
    constructor(bodyA, bodyB){
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length: 10
    }
    this.bridge = Constraint.create(options);
    World.add(world, this.bridge);
  }

  display(){
  var bodyA = this.bridge.bodyA.position;
  var bodyB = this.bridge.bodyB.position;
  strokeWeight(5);
  line(bodyA.x, bodyA.y,bodyB.x, bodyB.y);
  }
}