export default class CompareTriples {
    constructor() {}

    execute(aliceRanking: number[], bobRanking: number[]) {
        if(aliceRanking.length !== bobRanking.length) throw new Error("difference between amount of rankings");
        const scores = [0, 0];
        for(let index = 0; index <= aliceRanking.length; index++) {
            if(aliceRanking[index] > bobRanking[index]) scores[0] += 1;
            if(aliceRanking[index] < bobRanking[index]) scores[1] += 1;
        }
        return scores;
    }
}
