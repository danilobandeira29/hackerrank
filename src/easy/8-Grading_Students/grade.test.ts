import Grade from "./Grade";

test("should not round grade if value is less than 38", function () {
    const number = 37;
    const grade = new Grade(number);
    expect(grade.value).toBe(37);
});

test("should round grade if value is greater or equal to 38", function () {
    const number = 38;
    const grade = new Grade(number);
    expect(grade.value).toBe(40);
});
