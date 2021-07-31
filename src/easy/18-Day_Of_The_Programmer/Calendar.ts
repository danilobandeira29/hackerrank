export default class Calendar {
    year: number;
    years: { name: string, lengthInDays: number }[];

    constructor (year: number) {
        this.year = year;
        this.years = [
            {
                name: "january",
                lengthInDays: 31,
            },
            {
                name: "february",
                lengthInDays: this.februaryDaysInCalendar()
            },
            {
                name: "march",
                lengthInDays: 31
            },
            {
                name: "april",
                lengthInDays: 30
            },
            {
                name: "may",
                lengthInDays: 31
            },
            {
                name: "june",
                lengthInDays: 30
            },
            {
                name: "july",
                lengthInDays: 31
            },
            {
                name: "august",
                lengthInDays: this.augustDaysInCalendar()
            },
            {
                name: "september",
                lengthInDays: 30
            },
            {
                name: "october",
                lengthInDays: 31
            },
            {
                name: "november",
                lengthInDays: 30
            },
            {
                name: "december",
                lengthInDays: 31
            },
        ];
    }

    februaryDaysInCalendar () {
        if(this.isJulianCalendar() && this.isLeapYearInJulianCalendar()) return 30;
        if(this.isJulianCalendar() || this.isLeapYearInCalendar()) return 29;
        return 28;
    }

    isJulianCalendar () {
        if(this.year >= 1700 && this.year <= 1917) return true;
        return false;
    }

    isLeapYearInJulianCalendar () {
        return this.year % 4 === 0;
    }

    isLeapYearInCalendar () {
        if(this.isJulianCalendar() && this.isLeapYearInJulianCalendar()) return true; 
        if((this.year % 4 == 0 && this.year % 100 != 0 ) || (this.year % 400 == 0)) return true;
        return false;
    }

    augustDaysInCalendar(): number {
        if(this.isJulianCalendar()) return 30;
        return 31;
    }

    day256thOfTheYear () {
        let sumDaysEightFirstMonths = 0
        for(let month = 0; month < 8; month++) {
            sumDaysEightFirstMonths += this.years[month].lengthInDays;
        }
        if(this.isYearTransitionJulianToGregorianCalendar()) return "26.09.1918";
        if(256 - sumDaysEightFirstMonths === 13) return `13.09.${this.year}`;
        return `12.09.${this.year}`;
    }

    isYearTransitionJulianToGregorianCalendar () {
        return this.year === 1918;
    }

}
