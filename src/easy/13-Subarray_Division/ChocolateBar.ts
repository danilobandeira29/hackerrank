export default class ChocolateBar {
    selected: number[];
    birthDay: number;
    birthMonth: number;

    constructor (selected: number[], birthDay: number, birthMonth: number) {
        this.selected = selected;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
    }

    divide (): number {
        return this.selected.reduce((accumulator, _, index) => {
            const segment = this.segment(index);
            if(this.isValidToDivide(segment)) accumulator++;
            return accumulator;
        }, 0)
    }

    segment (number: number) {
        return this.selected.slice(number, number + this.birthMonth);;
    }

    isValidToDivide(numbers: number[]) {
       return this.sumNumbers(numbers) === this.birthDay;
    }

    sumNumbers (numbers: number[]) {
        return numbers.reduce((acc, curr) => acc+curr, 0);
    }
}
