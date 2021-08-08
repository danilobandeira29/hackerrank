export default class Proportions {
    private INTEGERS = 0;
    private NEGATIVES = 1;
    private ZERO = 2;
    private proportions = [0,0,0];
    private values: number[];

    constructor(values: number[]) {
        this.values = values;
        this.calculateProportions();
    }

    calculateProportions(): void {
        for(const value of this.values) {
            this.incrementProportion(value);
        }
    }

    private incrementProportion(value: number): void {
        if(value > 0) this.incrementIntegersProportion();
        if(value < 0) this.incrementNegativesProportion();
        if(value === 0) this.incrementZeroProportion();
    }

    private incrementIntegersProportion(): void {
        this.proportions[this.INTEGERS] += 1;
    }

    private incrementNegativesProportion(): void {
        this.proportions[this.NEGATIVES] += 1;
    }

    private incrementZeroProportion(): void {
        this.proportions[this.ZERO] += 1;
    }

    print(): void {
        for(const proportion of this.proportions) {
            console.log(parseFloat((proportion / this.values.length).toFixed(6)));
        }
    }
}
