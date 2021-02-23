class Quiz {
    constructor(){}

    getState(){
     var quizStateRef = database.ref('QuizState');
      quizStateRef.on("value",function(data){
      quizState = data.val();
      })
     
    }
    update(state){
      database.ref('/').update({
      quizState: state
      })
    }
    async start(){
      if(gameState === 0){
        contestant = new Contestant();

        var contestantRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount=contestantRef.val();
            contestant.getCount();
        }
        question = new Question();
        question.display();
      }
    }
}
