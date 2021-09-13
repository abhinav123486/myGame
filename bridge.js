class bridge{
    constructor(x, y, w, h){

    var options = {
        density:10,
        fricion:0.01,
        isStatic:false
    }

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    World.add(world, this.body);
}

    print(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}