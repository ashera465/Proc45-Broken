class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.titleImg = createElement("h1");
      this.greeting = createElement("h2");
    }
  
    setElementsPosition() {
      this.titleImg.position(100, 100);
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    setElementsStyle() {
     
      var title = "Maze Game";
      
      this.titleImg.class("gameTitle");
      this.titleImg.html(title);
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
      this.titleImg.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        var message = `
        Game Loading...`;
        this.greeting.html(message);
        gameState +=1;
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  }
  