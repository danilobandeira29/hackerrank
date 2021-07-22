import LineJumps from "./main";

test("should return YES when kangaroos first location is less and jump greater than second jump", function () {
    const startLocation1 = 0; 
    const startLocation2 = 4;
    const metersPerJump1 = 3;
    const metersPerJump2 = 2;
    const sameLocation = new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2).execute();
    expect(sameLocation).toBe("YES");
});

test("should return YES when kangaroos second location is less and jump greater than first jump", function () {
    const startLocation1 = 4; 
    const startLocation2 = 0;
    const metersPerJump1 = 2;
    const metersPerJump2 = 3;
    const sameLocation = new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2).execute();
    expect(sameLocation).toBe("YES");
});


test("should return NO when kangaroos first location and jump is less and than the second", function () {
    const startLocation1 = 0; 
    const startLocation2 = 5;
    const metersPerJump1 = 2;
    const metersPerJump2 = 3;
    const sameLocation = new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2).execute();
    expect(sameLocation).toBe("NO");
});

test("should return YES when kangaroos jump at the same start point and same jump point", function () {
    const startLocation1 = 1; 
    const startLocation2 = 1;
    const metersPerJump1 = 2;
    const metersPerJump2 = 2;
    const sameLocation = new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2).execute();
    expect(sameLocation).toBe("YES");
});

test("should return NO when kangaroos jump at the same start point but different jump point", function () {
    const startLocation1 = 1; 
    const startLocation2 = 1;
    const metersPerJump1 = 2;
    const metersPerJump2 = 3;
    const sameLocation = new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2).execute();
    expect(sameLocation).toBe("NO");
});

test("should throw error when first start is less than 0", function () {
    const startLocation1 = -1; 
    const startLocation2 = 1;
    const metersPerJump1 = 2;
    const metersPerJump2 = 3;
    expect(() => new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2)).toThrow(new Error("Invalid start input."));
});

test("should throw error when second start is less than 0", function () {
    const startLocation1 = 1; 
    const startLocation2 = -1;
    const metersPerJump1 = 2;
    const metersPerJump2 = 3;
    expect(() => new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2)).toThrow(new Error("Invalid start input."));
});

test("should throw error when first jump is 0 or less", function () {
    const startLocation1 = 1; 
    const startLocation2 = 1;
    const metersPerJump1 = 0;
    const metersPerJump2 = 3;
    expect(() => new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2)).toThrow(new Error("Invalid jump input."));
});

test("should throw error when second jump is 0 or less", function () {
    const startLocation1 = 1; 
    const startLocation2 = 1;
    const metersPerJump1 = 1;
    const metersPerJump2 = 0;
    expect(() => new LineJumps(startLocation1, metersPerJump1, startLocation2, metersPerJump2)).toThrow(new Error("Invalid jump input."));
});

