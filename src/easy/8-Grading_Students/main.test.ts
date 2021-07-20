import GrandingStudents from "./main";

test("should round each student grades", function () {
    const grades = [73, 67, 38, 33];
    const gradingStudents = new GrandingStudents(grades);
    const roundGrades = gradingStudents.roundGrades();
    expect(roundGrades).toEqual([75, 67, 40, 33]);
});
