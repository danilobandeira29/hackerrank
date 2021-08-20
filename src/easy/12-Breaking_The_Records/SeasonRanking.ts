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

    countLowestAndHighestPersonalRecordsBreaked () {
        for(const score of this.scores) {
            if(this.isLowestScore(score)) {
                this.updateLowestScore(score);
                this.incrementLowestScoreCounter();
            }
            if(this.isHighestScore(score)) {
                this.updateHighestScore(score);
                this.incrementHighestScoreCounter();
            }
        }
        return [this.countHighestScore, this.countLowestScore];
    }

    isLowestScore(score: Score) {
        return score.value < this.lowestScore.value;
    }

    updateLowestScore(score: Score) {
        this.lowestScore = score;
    }

    incrementLowestScoreCounter() {
        this.countLowestScore++;
    }

    isHighestScore(score: Score) {
        return score.value > this.highestScore.value;
    }

    updateHighestScore(score: Score) {
        this.highestScore = score;
    }

    incrementHighestScoreCounter() {
        this.countHighestScore++;
    }
}
