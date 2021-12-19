class Player{
    constructor (){
        this.name = null;
        this.character = null;
        this.score = 0;
        this.end = null;
        this.index = null;
        this.distanceX = 200;
        this.distanceY = 0;
    }
    readPlayerCount(){
      database.ref("playerCount").on('value',(data)=>{playerCount = data.val()});
    }
    updatePlayerCount(count){
        console.log("hp1");
        console.log(count);
        database.ref("/").update({playerCount: count});

    }
    updatePlayerInfo(){
        database.ref("players/player"+ this.index).set
        ({name : this.name,
        character : this.character,
        score : this.score,
        distanceY:this.distanceY,
      distanceX:this.distanceX});
    }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}