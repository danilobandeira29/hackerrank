import InvalidIntNumbersException from "./InvalidIntNumbersException";
import CalculatorIntNumbers from "./CalculatorIntNumbers";

test("should throw exception if array length is less or equal to 0", function () {
    const emptyNumbers = [] as number[];
    expect(() => new CalculatorIntNumbers(emptyNumbers)).toThrow(new InvalidIntNumbersException());
});

test("should throw exception if array length is bigger than 10", function () {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(() => new CalculatorIntNumbers(numbers)).toThrow(new InvalidIntNumbersException());
});

test("should sum int numbers", function () {
    const numbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    const calculatorIntNumbers = new CalculatorIntNumbers(numbers);
    const sum = calculatorIntNumbers.sum();
    expect(sum).toBe(5000000015);
});
