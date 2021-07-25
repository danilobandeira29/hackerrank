import SeasonRanking from "./SeasonRanking";
import Score from "./Score";

test("should determinate the numbers of time that breaks the personal season record(lowest and highest score)", function () {
    const scores = [
        new Score(10),
        new Score(5),
        new Score(20),
        new Score(20),
        new Score(4),
        new Score(5),
        new Score(2),
        new Score(25),
        new Score(1)
    ];
    const seasonRanking = new SeasonRanking(scores);
    expect(seasonRanking.breakingRecords()).toEqual([2, 4]);
});

test("should determinate the numbers of time that breaks the personal season record(lowest and highest score)", function () {
    const scores = [
        new Score(3),
        new Score(4),
        new Score(21),
        new Score(36),
        new Score(10),
        new Score(28),
        new Score(35),
        new Score(5),
        new Score(24),
        new Score(42)
    ];
    const seasonRanking = new SeasonRanking(scores);
    expect(seasonRanking.breakingRecords()).toEqual([4, 0]);
});

