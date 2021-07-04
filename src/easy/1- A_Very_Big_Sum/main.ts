import InvalidInputException from "./InvalidInputException";

export default class VeryBigSum {
    constructor() {}

    execute(input: number) {
        if(input <= 0 || input > 10) throw new InvalidInputException();
    }
}