class Rope{
    constructor(body,anchor)  
{
        var options = {
            bodyA: body,
            pointB:anchor,
            stiffness: 0.004,
            length: 10
        }
        
       
        this.bodyA=body
        this.pointB=anchor
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display()
    {
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offestX
        var Anchor2Y=pointB.y+this.offsetY
     
            
          
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
       
        }
    }
