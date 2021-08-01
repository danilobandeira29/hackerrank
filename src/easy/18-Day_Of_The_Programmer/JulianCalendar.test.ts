import JulianCalendar from "./JulianCalendar";

test("should return the full date of Day of the Programmer during year 1800 of the Julian's calendar and is a leap year", function () {
    const year = 1800;
    const day256thOfTheYear = new JulianCalendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("12.09.1800");
});

test("should return the full date of Day of the Programmer during year 1800 of the Julian's calendar and is not a leap year", function () {
    const year = 1801;
    const day256thOfTheYear = new JulianCalendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("13.09.1801");
});

test("should throw because the year is not support by the Julian's calendar", function () {
    const year = 1699;
    expect(() => new JulianCalendar(year)).toThrow(new Error("Year not supported by Julian's Calendar"));
});

test("should throw because the year is not support by the Julian's calendar", function () {
    const year = 1918;
    expect(() => new JulianCalendar(year)).toThrow(new Error("Year not supported by Julian's Calendar"));
})

test("should return that 1800 is not a leap year in Julian's Calendar", function () {
    const year = 1800;
    const isLeapYear = new JulianCalendar(year).isLeapYear();
    expect(isLeapYear).toBe(true);
});

test("should return that 1801 is not a leap year in Julian's Calendar", function () {
    const year = 1801;
    const isLeapYear = new JulianCalendar(year).isLeapYear();
    expect(isLeapYear).toBe(false);
});
