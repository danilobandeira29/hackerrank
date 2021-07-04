import InvalidInputException from "./InvalidInputException";
import VeryBigSum from "./main";

test("should throw exception if n is less or equal to 0", function () {
    const input = 0;
    const veryBigSum = new VeryBigSum();
    expect(() => veryBigSum.execute(input)).toThrow(new InvalidInputException());
});

test("should throw exception if n is bigger than 10", function () {
    const input = 11;
    const veryBigSum = new VeryBigSum();
    expect(() => veryBigSum.execute(input)).toThrow(new InvalidInputException());
});
