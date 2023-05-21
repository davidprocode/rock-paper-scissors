import { createRockPaperScissors } from "./rock-paper-scissors"

describe("rock-paper-scissors", () => {
    test("given player move paper and oponent move rock showld return player wins",() => {
        const sut = createRockPaperScissors()     
        const actual = sut.play("Paper", "Rock")
        expect(actual).toBe("Player Wins!")   
    })
})