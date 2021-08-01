export default abstract class Calendar {
    protected year: number;

    constructor(year: number) {
        this.year = year;
    }

    abstract day256thOfTheYear(): string;
}
