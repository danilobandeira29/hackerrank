import Score from "./Score";

test("should throw error if the value is 0 or less", function () {
    expect(() => new Score(0)).toThrow(new Error("Value must be greater or equal to 1."));
});

test("should successfully create the score", function () {
    const score = new Score(1);
    expect(score.value).toBe(1);
});
