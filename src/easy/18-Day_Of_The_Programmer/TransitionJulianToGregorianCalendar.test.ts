import TransitionJulianToGregorianCalendar from "./TransistionJulianToGregorianCalendar";

test("should return the full date of Day of the Programmer during year 1918 of the TransistionJulianToGregorian's Calendar", function () {
    const year = 1918;
    const day256thOfTheYear = new TransitionJulianToGregorianCalendar(year).day256thOfTheYear();
    expect(day256thOfTheYear).toBe("26.09.1918");
});

test("should throw because the only year supported by TransitionJulianToGregorianCalendar is 1918", function () {
    const year = 1917;
    expect(() => new TransitionJulianToGregorianCalendar(year)).toThrow("The only year supported by this calendar is 1918");
});

test("should throw because the only year supported by TransitionJulianToGregorianCalendar is 1918", function () {
    const year = 1919;
    expect(() => new TransitionJulianToGregorianCalendar(year)).toThrow("The only year supported by this calendar is 1918");
});
