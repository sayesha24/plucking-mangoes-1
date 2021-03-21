class Boyhand{

    constructor(bodyA, pointB){


    var options={

        bodyA: bodyA, 
        pointB: pointB, 
        length: 20, 
        isStatic: true,
        restitution: 0.8,
        friction: 0.4,
        stiffness: 0.004
    }   

    this.body= Constraint.create(options);
    World.add(world, this.body);
    this.pointB= pointB;
    }
    fly(){

        this.body.bodyA= null;
    }

    attatch(bodyA){

        {this.body.bodyA= bodyA};
        
    }
    display(){

        if(this.body.bodyA){

var pointA= this.body.bodyA.position;
var pointC= this.pointB;

strokeWeight(4);

line(pointA.x, pointA.y, pointC.x, pointC.y);
        }
}
    }
    
