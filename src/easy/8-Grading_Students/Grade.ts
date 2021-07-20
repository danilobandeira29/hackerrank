export default class Grade {
    value: number;

    constructor (value: number) {
        this.value = this.roundOrNot(value);
    }
    
    roundOrNot(value: number) {
        if(this.isValidToRound(value)) return this.getNextMultipleFive(value);
        return value;
    }

    isValidToRound(value: number) {
        const FACTOR_ROUND = 3;
        const diffLessThanThree = Math.abs(value - this.getNextMultipleFive(value)) < FACTOR_ROUND;
        const FACTOR_TO_ROUND_GRADE = 38;
        return value >= FACTOR_TO_ROUND_GRADE && diffLessThanThree;
    }
    
    getNextMultipleFive(value: number) {
        return Math.ceil(value / 5) * 5
    }
    
}
  