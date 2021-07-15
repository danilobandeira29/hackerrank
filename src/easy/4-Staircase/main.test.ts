import Staircase from "./main";

test("should print staircase # of size n", function () {
    const size = 6;
    console.log = jest.fn();
    const staircase = new Staircase();
    staircase.print(size);
    expect(console.log).toHaveBeenNthCalledWith(1, "     #");
    expect(console.log).toHaveBeenNthCalledWith(2, "    ##");
    expect(console.log).toHaveBeenNthCalledWith(3, "   ###");
    expect(console.log).toHaveBeenNthCalledWith(4, "  ####");
    expect(console.log).toHaveBeenNthCalledWith(5, " #####");
    expect(console.log).toHaveBeenNthCalledWith(6, "######");
});