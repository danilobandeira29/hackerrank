import DivisibleSumPairs from "./DivisibleSumPairs";

test("should return 3 count of divisibles sum pairs", function () {
    const divisor = 5;
    const array = [1, 2, 3, 4, 5, 6];
    const countSumPairs = new DivisibleSumPairs(array, divisor).count();
    expect(countSumPairs).toBe(3);
});

test("should return 5 count of divisibles sum pairs", function () {
    const divisor = 3;
    const array = [1, 3, 2, 6, 1, 2];
    const countSumPairs = new DivisibleSumPairs(array, divisor).count();
    expect(countSumPairs).toBe(5);
});
