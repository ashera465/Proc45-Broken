var gameState,player1,score,player_image, coin_image, block_image, spike_image,bg_img;
var border,spike1, coin1;
var normalBlocks = [];
var spikeBlocks = [];
var coinBlocks = [];
gameState = 0;


function preload(){
  bg_img = loadImage("images/start_image.png");
  //player_image = loadImage("");
  coin_image = loadImage("images/coin.png");
  spike_image = loadImage("images/spike.png");
  block_image = loadImage("images/block1.png");
  border_image = loadImage("images/border.png");
  player_image = loadImage("images/player.png");
 
}
function setup(){
  
  createCanvas(500,500);
  

  
    start(); 
  
 
  
}

function draw(){
  

 
  if(gameState ==1){
    background("#bafe00");
    level_1();
    
    player1.display();
    

    fill("red");
    spike1 = new killB(200,200);
    spike1.display();
    coin1 = new coinB(300, 200);
    coin1.display();
    inputs.hide();
    player1.transform1();
  }
  
 
    
  
 
}
//end of draw
function level_1(){
  //top border
    for(var i = 0;i < 25; i++){
     var border1 = new Borders(20*i,0);
      border1.display();
      normalBlocks.push(border1);
    }
    //left border
    for(var i = 0;i < 25; i++){
      var border2 = new Borders(0,20*i);
       border2.display();
       normalBlocks.push(border2);
     }
    //right border
     for(var i = 0;i < 25; i++){
      var border3 = new Borders(480,20*i);
       border3.display();
       normalBlocks.push(border3);
     }
     //bottom border
     for(var i = 0;i < 25; i++){
      var border4 = new Borders(20*i,480);
       border4.display();
       normalBlocks.push(border4);
     }
     fill('red');
     player1 = new player(400,400);
     var car1 = createSprite(width / 2 - 50, height - 100);
     player1.addImage("car1", player_image);
     
}



function start(){
    
    fill("red");
    //image(bg_img,400,400,window.width,window.height);
    if(gameState ==0){
      background(bg_img);
      inputs = new Form();
      inputs.display();
      
    }
    
  
}
