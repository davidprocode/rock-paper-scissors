export enum Move {
    Paper,
    Rock,
    Scissors
}

interface RockPaperScissors{
    play(p1Move:Move, Move:Move):string
}

export function createRockPaperScissors(): RockPaperScissors {
    return {
        play(p1Move:Move,p2Move:Move){
            if (p2Move === Move.Scissors) {
                return "Player Loses!"
            }
            return "Player Wins!"
        }
   }    
}