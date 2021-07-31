import Calendar from "./Calendar";

test("should return the full date of Day of the Programmer during year 1918 of the Gregorian's calendar", function () {
    const year = 1918;
    const day256thOfTheYear = new Calendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("26.09.1918");
});

test("should return the full date of Day of the Programmer during year 2000 of the Gregorian's calendar", function () {
    const year = 2000;
    const day256thOfTheYear = new Calendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("12.09.2000");
});

test("should return the full date of Day of the Programmer during year 2017 of the Gregorian's calendar", function () {
    const year = 2017;
    const day256thOfTheYear = new Calendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("13.09.2017");
});

test("should return the full date of Day of the Programmer during year 2016 of the Gregorian's calendar", function () {
    const year = 2016;
    const day256thOfTheYear = new Calendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("12.09.2016");
});

test("should return the full date of Day of the Programmer during year 1800 of the Julian's calendar", function () {
    const year = 1800;
    const day256thOfTheYear = new Calendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("12.09.1800");
});


test("should return true Russia's calendar uses Gregorian's calendar since 1919 therefore is a leap year", function () {
    const year = 2016;
    const isLeapYearInCalendar = new Calendar(year).isLeapYearInCalendar();
    expect(isLeapYearInCalendar).toBe(true);
});

test("should return false Russia's calendar uses Gregorian's calendar since 1919 therefore and is not a leap year", function () {
    const year = 2001;
    const isLeapYearInCalendar = new Calendar(year).isLeapYearInCalendar();
    expect(isLeapYearInCalendar).toBe(false);
});

test("should return true because Russia's calendar uses Julian's Calendar between 1700 and 1917", function () {
    const year = 1800;
    const isLeapYearInCalendar = new Calendar(year).isLeapYearInCalendar();
    expect(isLeapYearInCalendar).toBe(true);
});

test("should return true because Russia's calendar uses Julian's Calendar between 1700 and 1917", function () {
    const year = 1700;
    const isLeapYearInCalendar = new Calendar(year).isLeapYearInCalendar();
    expect(isLeapYearInCalendar).toBe(true);
});

test("should return false because Russia's calendar uses Julian's Calendar between 1700 and 1917", function () {
    const year = 1917;
    const isLeapYearInCalendar = new Calendar(year).isLeapYearInCalendar();
    expect(isLeapYearInCalendar).toBe(false);
});

test("should return true because is the minimium year of the Julian calendar", function () {
    const year = 1700;
    const isJulianCalendar = new Calendar(year).isJulianCalendar();
    expect(isJulianCalendar).toBe(true);
});

test("should return true because is the maximum year of the Julian calendar", function () {
    const year = 1917;
    const isJulianCalendar = new Calendar(year).isJulianCalendar();
    expect(isJulianCalendar).toBe(true);
});

test("should return false because uses Gregorian's calendar", function () {
    const year = 1918;
    const isJulianCalendar = new Calendar(year).isJulianCalendar();
    expect(isJulianCalendar).toBe(false);
});
