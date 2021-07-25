import Score from "./Score";

export default class SeasonRanking {
    scores: Score[];
    lowestScore: Score;
    highestScore: Score;
    countLowestScore: number;
    countHighestScore: number;

    constructor (scores: Score[]) {
        this.scores = scores;
        this.highestScore = this.scores[0];
        this.lowestScore = this.scores[0];
        this.countHighestScore = 0;
        this.countLowestScore = 0;
    }

    breakingRecords () {
        for(const score of this.scores) {
            if(this.isLowestScore(score)) {
                this.lowestScore = score;
                this.countLowestScore++;
            }
            if(this.isHighestScore(score)) {
                this.highestScore = score;
                this.countHighestScore++;
            }
        }
        return [this.countHighestScore, this.countLowestScore];
    }

    isLowestScore(score: Score) {
        return score.value < this.lowestScore.value;
    }

    isHighestScore(score: Score) {
        return score.value > this.highestScore.value;
    }
}