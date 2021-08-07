export default class Triplets {
    private firstRanking: number[];
    private secondRanking: number[];
    private rankingsSum: number[] = [];
    

    constructor(firstRanking: number[], secondRanking: number[]) {
        if(firstRanking.length !== secondRanking.length) throw new Error("Difference between rankings length");
        this.firstRanking = firstRanking;
        this.secondRanking = secondRanking;
        this.rankingsSum = [0,0];
    }

    compareRankings() {
        return this.firstRanking.reduce((rankingsSum, first, second) => {
            if(this.isEqual(first, second)) return rankingsSum;
            if(this.firstIsBiggerThanSecond(first, second)) this.incrementFirstRankingSum();
            else this.incrementSecondRankingSum();
            return rankingsSum;
        }, this.rankingsSum);
    }

    isEqual(first: number, second: number) {
        return first === this.secondRanking[second];
    }

    firstIsBiggerThanSecond(first: number, index: number) {
        return first > this.secondRanking[index];
    }

    incrementFirstRankingSum() {
        const FIRST_RANKING_SUM = 0;
        this.rankingsSum[FIRST_RANKING_SUM] += 1;
    }

    incrementSecondRankingSum() {
        const SECOND_RANKING_SUM = 1;
        this.rankingsSum[SECOND_RANKING_SUM] += 1;
    }
}
