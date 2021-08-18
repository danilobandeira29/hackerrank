import Kangaroo from "./Kangaroo";

test("should increment kangaroo location", function () {
    const kangaroo = new Kangaroo({ location: 0, metersPerJump: 1 });
    kangaroo.incrementLocation();
    expect(kangaroo.location.value).toBe(1);
});

test("should return false when kangaroo's location is not equal to another kangaroo's location", function () {
    const kangaroo1 = new Kangaroo({ location: 0, metersPerJump: 1 });
    const kangaroo2 = new Kangaroo({ location: 2, metersPerJump: 1 });
    expect(kangaroo1.locationIsEqual(kangaroo2.location)).toBe(false);
});

test("should return true when kangaroo's location is equal to another kangaroo's location", function () {
    const kangaroo1 = new Kangaroo({ location: 0, metersPerJump: 1 });
    const kangaroo2 = new Kangaroo({ location: 0, metersPerJump: 2 });
    expect(kangaroo1.locationIsEqual(kangaroo2.location)).toBe(true);
});
