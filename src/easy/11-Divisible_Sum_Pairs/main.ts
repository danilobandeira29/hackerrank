export default class DivisibleSumPairs {
    length: number;
    integerDivisor: number;
    array: number[];

    constructor (length: number, integerDivisor: number, array: number[]) {
        this.length = length;
        this.integerDivisor = integerDivisor;
        this.array = array;
    }

    execute () {
        let accumulator = 0;
        for(let integer = 0; integer < this.length; integer++) {
            accumulator = this.getNextInteger(integer, accumulator);
        }
        return accumulator;
    }

    getNextInteger(integer: number, accumulator: number) {
        for(let index = 1; index < this.length; index++) {
            if(this.isDivisibleSumPair(integer, index)) accumulator++;
        }
        return accumulator;
    }

    isDivisibleSumPair(integer: number, index: number) {
        return integer < index && (this.array[integer] + this.array[index]) % this.integerDivisor === 0;
    }
}
