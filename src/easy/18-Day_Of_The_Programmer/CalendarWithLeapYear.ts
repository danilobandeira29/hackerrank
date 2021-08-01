import Calendar from "./Calendar";

export default abstract class CalendarWithLeapYear extends Calendar {
    firstEightMonthsInDays: number[];

    constructor (year: number) {
        super(year);
        this.firstEightMonthsInDays = [31, 28, 31, 30, 31, 30, 31, 31];
    }

    abstract isLeapYear(): boolean;

    sumDaysEightFirstMonths() {
        const sumDaysEightFirstMonths = this.firstEightMonthsInDays.reduce((accumulator, current) => accumulator += current, 0);
        return this.isLeapYear() ? sumDaysEightFirstMonths + 1 : sumDaysEightFirstMonths;
    }

    day256thOfTheYear () {
        if(256 - this.sumDaysEightFirstMonths() === 13) return `13.09.${this.year}`;
        return `12.09.${this.year}`;
    }
}
