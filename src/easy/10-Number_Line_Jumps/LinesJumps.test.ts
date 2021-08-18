import LineJumps from "./LinesJumps";
import LineJumpsInputDTO from "./LineJumpsInputDTO";

test("should return YES when kangaroos first location is less and jump greater than second jump", function () {
    const linesJumpsInputDTO = new LineJumpsInputDTO({
        firstLocation: 0,
        secondLocation: 4,
        firstMetersPerJump: 3,
        secondMetersPerJump: 2
    });
    const sameLocation = new LineJumps().execute(linesJumpsInputDTO);
    expect(sameLocation).toBe("YES");
});

test("should return YES when kangaroos first location is less and jump greater than second jump", function () {
    const linesJumpsInputDTO = new LineJumpsInputDTO({
        firstLocation: 4,
        secondLocation: 0,
        firstMetersPerJump: 2,
        secondMetersPerJump: 3
    });
    const sameLocation = new LineJumps().execute(linesJumpsInputDTO);
    expect(sameLocation).toBe("YES");
});

test("should return YES when kangaroos second location is less and jump greater than first jump", function () {
    const linesJumpsInputDTO = new LineJumpsInputDTO({
        firstLocation: 4,
        secondLocation: 0,
        firstMetersPerJump: 2,
        secondMetersPerJump: 3
    });
    const sameLocation = new LineJumps().execute(linesJumpsInputDTO);
    expect(sameLocation).toBe("YES");
});


test("should return NO when kangaroos first location and jump is less and than the second", function () {
    const linesJumpsInputDTO = new LineJumpsInputDTO({
        firstLocation: 0,
        secondLocation: 5,
        firstMetersPerJump: 2,
        secondMetersPerJump: 3
    });
    const sameLocation = new LineJumps().execute(linesJumpsInputDTO);
    expect(sameLocation).toBe("NO");
});

test("should return YES when kangaroos jump at the same start point and same jump point", function () {
    const linesJumpsInputDTO = new LineJumpsInputDTO({
        firstLocation: 1,
        secondLocation: 1,
        firstMetersPerJump: 2,
        secondMetersPerJump: 2
    });
    const sameLocation = new LineJumps().execute(linesJumpsInputDTO);
    expect(sameLocation).toBe("YES");
});

test("should return NO when kangaroos jump at the same start point but different jump point", function () {
    const linesJumpsInputDTO = new LineJumpsInputDTO({
        firstLocation: 1,
        secondLocation: 1,
        firstMetersPerJump: 2,
        secondMetersPerJump: 3
    });
    const sameLocation = new LineJumps().execute(linesJumpsInputDTO);
    expect(sameLocation).toBe("NO");
});
