export default class InvalidInputException extends Error {
    constructor() {
        super("input should be bigger/equal than 1 and less/equal to 10");
    }
}