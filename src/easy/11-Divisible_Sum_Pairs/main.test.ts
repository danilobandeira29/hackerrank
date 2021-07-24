import DivisibleSumPairs from "./main";

test("should return count of divisibles sum pairs", function () {
    const integerDivisor = 5;
    const array = [1, 2, 3, 4, 5, 6];
    const count = new DivisibleSumPairs(array.length, integerDivisor, array).execute();
    expect(count).toBe(3);
});

test("should return count of divisibles sum pairs", function () {
    const integerDivisor = 3;
    const array = [1, 3, 2, 6, 1, 2];
    const count = new DivisibleSumPairs(array.length, integerDivisor, array).execute();
    expect(count).toBe(5);
});
