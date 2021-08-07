import InvalidIntNumbersException from "./InvalidIntNumbersException";

export default class CalculatorIntNumbers {
    private numbers: number[];

    constructor(numbers: number[]) {
        if(numbers.length <= 0 || numbers.length > 10) throw new InvalidIntNumbersException();
        this.numbers = numbers;
    }

    sum() {
        return this.numbers.reduce((accumulator, current) => accumulator += current, 0);
    }
}