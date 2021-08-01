import Calendar from "./Calendar";

export default abstract class CalendarWithLeapYear extends Calendar {
    constructor (year: number) {
        super(year);
    }

    abstract isLeapYear(): boolean;
}