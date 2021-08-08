import Number from "./Number";

test("should print lines with the proportion of integers, negative and zero values contained in an array", function () {
    const values = [-4, 3, -9, 0, 4, 1];
    console.log = jest.fn();
    Number.proportions(values);
    expect(console.log).toHaveBeenNthCalledWith(1, 0.500000);
    expect(console.log).toHaveBeenNthCalledWith(2, 0.333333);
    expect(console.log).toHaveBeenNthCalledWith(3, 0.166667);
});
