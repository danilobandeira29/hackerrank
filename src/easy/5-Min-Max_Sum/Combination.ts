export default class Combination {
    private combinations: number[] = [];
    private values: number[];

    constructor (values: number[]) {
        if(!values.length) throw new Error("Invalid values length.");
        this.values = values;
        this.calculateCombinations();
    }

    printMinAndMax(): void {
        return console.log(`${this.getMinCombination()} ${this.getMaxCombination()}`);
    }

    private getMinCombination() {
        return Math.min(...this.combinations);
    }

    private getMaxCombination() {
        return Math.max(...this.combinations);
    }

    private calculateCombinations() {
        for(let ignore = 0; ignore < this.values.length; ignore++) {
            const combinationOfFour = this.calculateCombinationOfFour(ignore);
            this.combinations.push(combinationOfFour);
        }
    }

    private calculateCombinationOfFour(ignored: number): number {
        return this.values.reduce((accumulator, value, index) => {
            if(index === ignored) return accumulator += 0;
            return accumulator += value;
        }, 0);
    }

}
