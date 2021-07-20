import Grade from "./Grade";
import GradingStudents from "./main";

test("should return student grades rounded", function () {
    const grades = [
        new Grade(73),
        new Grade(67),
        new Grade(38),
        new Grade(33)
    ];
    const gradingStudents = new GradingStudents(grades);
    expect(gradingStudents.grades()).toEqual([75, 67, 40, 33]);
});
