import Staircase from "./Staircase";

test("should print #'s with the staircase's size", function () {
    const staircaseSize = 6;
    console.log = jest.fn();
    Staircase.print(staircaseSize);
    expect(console.log).toHaveBeenNthCalledWith(1, "     #");
    expect(console.log).toHaveBeenNthCalledWith(2, "    ##");
    expect(console.log).toHaveBeenNthCalledWith(3, "   ###");
    expect(console.log).toHaveBeenNthCalledWith(4, "  ####");
    expect(console.log).toHaveBeenNthCalledWith(5, " #####");
    expect(console.log).toHaveBeenNthCalledWith(6, "######");
});
