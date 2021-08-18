import MetersPerJump from "./MetersPerJumpImpl";

test("should throw error when first jump is 0 or less", function () {
    expect(() => new MetersPerJump(0)).toThrow(new Error("Invalid jump input."));
});
