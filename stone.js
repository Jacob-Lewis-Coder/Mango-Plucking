class Stone{
    constructor(x, y){
        //use Bodies.circle to create the stone
        var options ={
            'restitution':0.5,
             'density':0.5,
             'friction' : 0.1
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.r = 30;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
        //use push pop translate rotate image
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
        
    }
}