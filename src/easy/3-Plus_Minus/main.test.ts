import PlusMinus from "./main";

test("should return a array with proportion of integers, negative and zero values", function () {
    const values = [-4, 3, -9, 0, 4, 1];
    console.log = jest.fn();
    const plusMinus = new PlusMinus();
    plusMinus.execute(values);
    expect(console.log).toHaveBeenNthCalledWith(1, 0.500000);
    expect(console.log).toHaveBeenNthCalledWith(2, 0.333333);
    expect(console.log).toHaveBeenNthCalledWith(3, 0.166667);
});
