import Combination from "./Combination";

test("should find the minimum and maximum values summing exactly four of the five integers", function () {
    const values = [1, 2, 3, 4, 5];
    console.log = jest.fn();
    const combination = new Combination(values);
    combination.printMinAndMax();
    expect(console.log).toHaveBeenCalledWith("10 14");
});

test("should find the minimum and maximum values summing exactly four of the five integers", function () {
    const values = [7, 69, 2, 221, 8974];
    console.log = jest.fn();
    const combination = new Combination(values);
    combination.printMinAndMax()
    expect(console.log).toHaveBeenCalledWith("299 9271");
});


test("should throw if values length is 0", function () {
    expect(() => new Combination([] as number[])).toThrow(new Error("Invalid values length."));
});

