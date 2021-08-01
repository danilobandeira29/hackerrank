import Calendar from "./Calendar";

export default class TransitionJulianToGregorianCalendar extends Calendar {

    constructor (year: number) {
        if(year !== 1918) throw new Error("The only year supported by this calendar is 1918");
        super(year);
    }

    day256thOfTheYear(): string {
        return "26.09.1918";
    }
}
