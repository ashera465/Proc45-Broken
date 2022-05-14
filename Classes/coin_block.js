class coinB{
    constructor(x,y){
        this.width = 30;
        this.height = 30;
      
        this.scale = 4;
        this.posX = x;
        this.posY = y;
        
  }
    


  display(){
    
  
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    image(coin_image,this.posX,this.posY, this.width, this.height);
    pop();
      
  }
}