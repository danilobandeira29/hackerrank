export default class ChocolateBar {
    private segment: number[];
    private birthDate: { day: number, month: number };
    private square: number[];

    constructor (segment: number[], birthDate: { day: number, month: number }) {
        this.segment = segment;
        this.birthDate = birthDate;
        this.square = [];
    }

    manyTimesCanDivide (): number {
        return this.segment.reduce((manyTimesCanDivide, _, index) => {
            this.setCurrentSquare(index);
            if(this.isValidToDivide()) manyTimesCanDivide++;
            return manyTimesCanDivide;
        }, 0)
    }

    private setCurrentSquare (beginSquare: number) {
        const endSquare = beginSquare + this.birthDate.month;
        this.square = this.segment.slice(beginSquare, endSquare);
    }

    private isValidToDivide() {
       return this.sumSquareNumbers() === this.birthDate.day;
    }

    private sumSquareNumbers () {
        return this.square.reduce((acc, curr) => acc+curr, 0);
    }
}
