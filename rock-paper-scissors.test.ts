import { createRockPaperScissors, Move } from "./rock-paper-scissors"

describe("rock-paper-scissors", () => {
    test("given player move paper and oponent move rock showld return player wins",() => {
        const sut = createRockPaperScissors()     
        const actual = sut.play(Move.Paper, Move.Rock)
        expect(actual).toBe("Player Wins!")   
    })

    test("given player move paper and oponent move scissor showld return player wins",() => {
        const sut = createRockPaperScissors()     
        const actual = sut.play(Move.Paper, Move.Scissors)
        expect(actual).toBe("Player Loses!")   
    })
})