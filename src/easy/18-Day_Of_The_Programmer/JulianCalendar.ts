import CalendarWithLeapYear from "./CalendarWithLeapYear";

export default class JulianCalendar extends CalendarWithLeapYear {
    monthsInDays: number[];

    constructor (year: number) {
        if(year <= 1699 || year >= 1918) throw new Error("Year not supported by Julian's Calendar");
        super(year);
        this.monthsInDays = [31, this.februaryDays(), 31, 30, 31, 30, 31, 31];
    }

    februaryDays(): number {
        if(this.isLeapYear()) return 29;
        return 28;
    }

    isLeapYear () {
        if(this.year % 4 === 0) return true;
        return false;
    }

    day256thOfTheYear () {
        const sumDaysEightFirstMonths = this.monthsInDays.reduce((accumulator, current) => accumulator += current, 0);
        if(256 - sumDaysEightFirstMonths === 13) return `13.09.${this.year}`;
        return `12.09.${this.year}`;
    }

}