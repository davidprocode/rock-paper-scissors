interface RockPaperScissors{
    play(p1Move:string, p2Move:string):string
}

export function createRockPaperScissors(): RockPaperScissors {
    return {
        play(p1Move:string,p2Move:string){
            return "Player Wins!"
        }
   }    
}