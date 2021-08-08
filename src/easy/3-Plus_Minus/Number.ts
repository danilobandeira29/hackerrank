export default class Number {
    private static INTEGERS = 0;
    private static NEGATIVES = 1;
    private static ZERO = 2;
    private static proportion = [0,0,0];

    static proportions(values: number[]): void {
        for(const value of values) {
            this.incrementProportion(value);
        }
        for(const prop of this.proportion) {
            this.printProportion(prop, values);
        }
    }

    private static incrementProportion(value: number): void {
        if(value > 0) this.incrementIntegersProportion();
        if(value < 0) this.incrementNegativesProportion();
        if(value === 0) this.incrementZeroProportion();
    }

    private static incrementIntegersProportion(): void {
        this.proportion[this.INTEGERS] += 1;
    }

    private static incrementNegativesProportion(): void {
        this.proportion[this.NEGATIVES] += 1;
    }

    private static incrementZeroProportion(): void {
        this.proportion[this.ZERO] += 1;
    }

    private static printProportion(proportion: number, values: number[]): void {
        console.log(parseFloat((proportion / values.length).toFixed(6)));
    }
}