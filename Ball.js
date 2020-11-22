class Ball {
    constructor (x,y,radius){
        var ball_options={
            restitution : 1.0
           }
         
           this.body=Bodies.circle(x,y,radius,ball_options);
           this.radius = radius;
           World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("cyan");
        circle(pos.x,pos.y,this.radius);
    }
}