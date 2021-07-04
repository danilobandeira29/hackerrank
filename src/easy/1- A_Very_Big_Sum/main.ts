import InvalidInputException from "./InvalidInputException";
import VeryBigSumInputData from "./VeryBigSumInputData";

export default class VeryBigSum {
    constructor() {}

    execute({ array }: VeryBigSumInputData) {
        if(array.length <= 0 || array.length > 10) throw new InvalidInputException();
        return array.reduce((accumulator, current) => accumulator += current, 0);
    }
}