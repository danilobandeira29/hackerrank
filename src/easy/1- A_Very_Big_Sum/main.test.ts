import InvalidInputException from "./InvalidInputException";
import VeryBigSum from "./main";
import VeryBigSumInputData from "./VeryBigSumInputData";

test("should throw exception if array length is less or equal to 0", function () {
    const inputData = new VeryBigSumInputData({ array: [] });
    const veryBigSum = new VeryBigSum();
    expect(() => veryBigSum.execute(inputData)).toThrow(new InvalidInputException());
});

test("should throw exception if array length is bigger than 10", function () {
    const inputData = new VeryBigSumInputData({ array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
    const veryBigSum = new VeryBigSum();
    expect(() => veryBigSum.execute(inputData)).toThrow(new InvalidInputException());
});

test("should sum all array elements", function () {
    const inputData = new VeryBigSumInputData({ array: [1000000001, 1000000002, 1000000003, 1000000004, 1000000005] });
    const veryBigSum = new VeryBigSum();
    const sum = veryBigSum.execute(inputData);
    expect(sum).toBe(5000000015);
});
