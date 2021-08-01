import CalendarWithLeapYear from "./CalendarWithLeapYear";

export default class JulianCalendar extends CalendarWithLeapYear {
    constructor (year: number) {
        if(year <= 1699 || year >= 1918) throw new Error("Year not supported by Julian's Calendar");
        super(year);
    }

    isLeapYear () {
        if(this.year % 4 === 0) return true;
        return false;
    }
}
