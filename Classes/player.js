class player{
    constructor(x,y){
        this.width = 40;
        this.height = 40;
        
        this.scale = 4;
        this.posX = x;
        this.posY = y;
        this.sprite = createSprite(x,y);
       
    }
    display(){
    
  
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        this.sprite("car1", player_image);
        
        pop();
          
      
    }
    transform1(){
        if (keyDown(UP_ARROW)) {
            this.posY += 10;
          }
      
          if (keyDown(LEFT_ARROW)){
            this.posX -= 5;
      
          }
      
          if (keyDown(RIGHT_ARROW)) {
            this.posX += 5;
          }
          if (keyDown(DOWN_ARROW)) {
            this.posY -= 5;
          }
          
    }
}
