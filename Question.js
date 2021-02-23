class Question {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
    }
    hide(){
      this.input.hide();
      this.greeting.hide();
      this.button.hide();
  } 
    display(){
      var title = createElement('h2')
      title.html("MyQuizGame");
      title.position(350, 0);

      this.question.html("Question:-Which is the largest city of south africa? ")
      this.question.position(150,80);

      this.option1.html("1) Cape Town");
      this.option.position(150,100);

      this.option2.html("2) Pretoria");
      this.option.position(150,120);

      this.option3.html("3) Bloemfontien");
      this.option.position(150,140);

      this.option4.html("4) Johannesburg");
      this.option.position(150,160);


      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
  
      contestant.name =  this.input.value();
        
      contestantCount+=1;
      contestant.index=contestantCount;
      contestant.update(contestant.name)
      contestant.updateCount(contestantCount);
       
      })
  
    }
  }
  