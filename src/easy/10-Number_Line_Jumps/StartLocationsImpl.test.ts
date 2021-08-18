import StartLocationsImpl from "./StartLocationsImpl";

test("should throw error when start is less than 0", function () {
    expect(() => new StartLocationsImpl(-1)).toThrow(new Error("Invalid start input."));
});
