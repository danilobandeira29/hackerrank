import GregorianCalendar from "./GregorianCalendar";

test("should return the full date of Day of the Programmer during year 2000 of the Gregorian's calendar and is a leap year", function () {
    const year = 2000;
    const day256thOfTheYear = new GregorianCalendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("12.09.2000");
});

test("should return the full date of Day of the Programmer during year 2017 of the Gregorian's calendar and is not a leap year", function () {
    const year = 2017;
    const day256thOfTheYear = new GregorianCalendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("13.09.2017");
});

test("should throw error when the year is not support by the Gregorian's Calendar", function () {
    const year = 1918;
    expect(() => new GregorianCalendar(year)).toThrow(new Error("Year not supported by Gregorian's Calendar"));
});

test("should return that 2000 is a leap year in Gregorian's Calendar", function () {
    const year = 2000;
    const isLeapYear = new GregorianCalendar(year).isLeapYear();
    expect(isLeapYear).toBe(true);
});

test("should return that 2001 is not a leap year in Gregorian's Calendar", function () {
    const year = 2001;
    const isLeapYear = new GregorianCalendar(year).isLeapYear();
    expect(isLeapYear).toBe(false);
});
