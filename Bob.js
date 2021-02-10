class Bob{
    constructor(x,y,r){
     var options = {
         isStatic : false,
         restitutuion : 0.3,
         friction : 0.5,
         density : 1.2
         }
         
        this.x=x;
		this.y=y;
		this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        
        


        World.add(world, this.body); 
        
    }
    display()
	{
			
			var bobPos=this.body.position;		

			push()
			translate(bobPos.x, bobPos.y);
			ellipseMode(CENTER)
			fill(128,128,128)
		    pop()
			
	}

}