class normaB{
  constructor(x,y){
        this.width = 40;
        this.height = 40;
        
        this.scale = 4;
        this.posX = x;
        this.posY = y;
        //image(block_image, this.posX, this.posY,this.width, this.height);
        
  }
    


  display(){
    
  
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    image(block_image,this.posX,this.posY,this.width, this.height);
    pop();
      
  }
}