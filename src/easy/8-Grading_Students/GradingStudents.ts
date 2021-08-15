import Grade from "./Grade";

export default class GradingStudents {
    private _grades: Array<Grade>;

    constructor (grades: Array<Grade>) {
        this._grades = grades;
    }

    grades () {
        return this._grades.map(grade => {
            return grade.get();
        })
    }
}