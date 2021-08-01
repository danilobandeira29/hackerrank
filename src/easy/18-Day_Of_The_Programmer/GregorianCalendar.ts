import CalendarWithLeapYear from "./CalendarWithLeapYear";

export default class GregorianCalendar extends CalendarWithLeapYear {
    constructor (year: number) {
        if(year <= 1918) throw new Error("Year not supported by Gregorian's Calendar");
        super(year);
    }

    isLeapYear () {
        if((this.year % 4 == 0 && this.year % 100 != 0 ) || (this.year % 400 == 0)) return true;
        return false;
    }
}
