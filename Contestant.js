class Contestant {
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
    contestantCount: count
      })
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      })
    }
  
   static getContestantInfo(){
      var contestantinfoRef = database.ref('contestant');
      contestantinfoRef.on("value",(data)=>{
       contestant = data.val();
      })
    }
  }
  