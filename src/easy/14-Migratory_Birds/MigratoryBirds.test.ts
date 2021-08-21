import MigratoryBirds from "./MigratoryBirds";

test("should return 4 because is the lowest type id of the most frequently sighted birds", function () {
    const ids = [1, 4, 4, 4, 5, 3];
    const lowestIdWithHighestCount = new MigratoryBirds(ids).getLowestBirdIdWithHighestCount();
    expect(lowestIdWithHighestCount).toBe(4);
});

test("should return 3 because the lowest type id of the most frequently sighted birds", function () {
    const ids = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
    const lowestIdWithHighestCount = new MigratoryBirds(ids).getLowestBirdIdWithHighestCount();
    expect(lowestIdWithHighestCount).toBe(3);
});

