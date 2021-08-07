export default class InvalidIntNumbersException extends Error {
    constructor() {
        super("The lenght of number's array should be bigger or equal than 1 and less or equal to 10");
    }
}
