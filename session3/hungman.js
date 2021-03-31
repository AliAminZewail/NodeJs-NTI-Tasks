class game{
    
    constructor(guess,trials){
        this.guess=guess;
        this.trials=trials;
    }
    getTrial(){
        return prompt('enter trial guess');
    }
    start(){
        let score=0;
        let lifes=4;
    
        for(let i=0;lifes>0&&i<this.trials;i++){
            if(this.guess.includes(this.getTrial())){
                score+=1;
            }else{
             alert('wrong trial')
                lifes--;
            }
            if(score==this.guess.length){
                alert('winner');
                return;
            }
        }
        alert("loser");
    }

}
game1 =new game('alohaalo',8);
game1.start();