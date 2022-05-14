class Borders{
    constructor(x,y){
          this.width = 20;
          this.height = 20;
          
          this.scale = 2;
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