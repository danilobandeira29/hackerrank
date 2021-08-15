export default class Grade {
    private FACTOR_TO_ROUND = 3;
    private MINIMUM_TO_ROUND = 38;
    private value: number;

    constructor (value: number) {
        this.value = value;
        this.roundIfIsValid();
    }
    
    private roundIfIsValid() {
        if(this.isValidToRound()) this.round();
    }

    private isValidToRound() {
        return this.valueIsEqualOrBiggerThanMinimumToRound() && this.diffIsLessThanFactorToRound();
    }

    private valueIsEqualOrBiggerThanMinimumToRound() {
        return this.value >= this.MINIMUM_TO_ROUND;
    }

    private diffIsLessThanFactorToRound() {
        return this.diffValueAndNextMultipleFive() < this.FACTOR_TO_ROUND;
    }

    private diffValueAndNextMultipleFive() {
        return Math.abs(this.value - this.getNextMultipleFive());
    }
    
    private getNextMultipleFive() {
        return Math.ceil(this.value / 5) * 5
    }

    private round() {
        this.value = this.getNextMultipleFive();
    }

    get() {
        return this.value;
    }

}
  