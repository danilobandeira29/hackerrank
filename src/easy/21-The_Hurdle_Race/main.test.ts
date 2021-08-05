import HurdleRace from "./HurdleRace";

test("should be able to jump heights", function () {
    const heights = [1, 6, 3, 5, 2];
    const currentJumpHeight = 4;
    const quantityPotionsToJumpAllHeights = new HurdleRace(currentJumpHeight, heights).quantityPotionsToJumpAllHeights();
    expect(quantityPotionsToJumpAllHeights).toBe(2);
});

test("should be able to jump heights", function () {
    const heights = [2, 5, 4, 5, 2];
    const currentJumpHeight = 7;
    const quantityPotionsToJumpAllHeights = new HurdleRace(currentJumpHeight, heights).quantityPotionsToJumpAllHeights();
    expect(quantityPotionsToJumpAllHeights).toBe(0);
});
