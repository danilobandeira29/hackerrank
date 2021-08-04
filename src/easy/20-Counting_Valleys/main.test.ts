import Valley from "./Valley";

test("should count 1 valleys", function () {
    const steps = ["U", "D", "D", "D", "U", "D", "U", "U"];
    const count = new Valley(steps).count();
    expect(count).toBe(1);
});

test("should count 2 valleys", function () {
    const steps = ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"];
    const count = new Valley(steps).count();
    expect(count).toBe(2);
});
