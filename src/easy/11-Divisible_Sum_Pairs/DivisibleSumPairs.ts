export default class DivisibleSumPairs {
    divisor: number;
    array: number[];

    constructor (array: number[], divisor: number) {
        this.divisor = divisor;
        this.array = array;
    }

    count () {
        return this.array.reduce((accumulator, _, index) => this.sumPairs(index, accumulator), 0);
    }

    private sumPairs(firstIndex: number, accumulator: number) {
        for(let secondIndex = 1; secondIndex < this.array.length; secondIndex++) {
            if(this.isDivisibleSumPair(firstIndex, secondIndex)) accumulator++;
        }
        return accumulator;
    }

    private isDivisibleSumPair(firstIndex: number, secondIndex: number) {
        return firstIndex < secondIndex && this.currentWithNextIsDivisibleForDivisor(firstIndex, secondIndex);
    }

    private currentWithNextIsDivisibleForDivisor(firstIndex: number, secondIndex: number) {
        return (this.array[firstIndex] + this.array[secondIndex]) % this.divisor === 0;
    }
}
