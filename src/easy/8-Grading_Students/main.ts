export default class GrandingStudents {
    grades: number[];

    constructor (grades: number[]) {
        this.grades = grades;
    }

    roundGrades () {
        const FACTOR_TO_ROUND_GRADE = 38;
        const FACTOR_ROUND = 3;
        return this.grades.map(grade => {
            const canRoundGrade = grade >= FACTOR_TO_ROUND_GRADE;
            const diffLessThanThree = Math.abs(grade - this.nextMultipleFive(grade)) < FACTOR_ROUND;
            if(canRoundGrade && diffLessThanThree) return this.nextMultipleFive(grade);
            return grade;
        })
    }

    nextMultipleFive(grade: number) {
        return Math.ceil(grade/5) * 5
    }
}