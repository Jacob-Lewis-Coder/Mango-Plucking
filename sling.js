class Sling{
    constructor(body1,point2){
        //create options and contraints
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 50,
            stiffness : 0.4
        }
        this.sling = Constraint.create(options);
        this.point2 = point2;
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(bodyA){
        this.sling.bodyA = bodyA;
    }
    display(){
       //display using line method
       if(this.sling.bodyA){
           var point1 = this.sling.bodyA.position;
           var point2 = this.point2;
           stroke("black");
           line(point1.x, point1.y, point2.x, point.y);
       }
    }
}
