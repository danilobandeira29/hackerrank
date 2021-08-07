import DifferenceBetweenRankingsLengthException from "./DifferenceBetweenRankingsLengthException";
import Triplets from "./Triplets";

test("should return [1,0] when firstRanking is bigger than secondRanking", function () {
    const firstRanking = [1];
    const secondRanking = [0];
    const comparedRankings = new Triplets(firstRanking, secondRanking).compareRankings();
    expect(comparedRankings).toEqual([1,0]);
});

test("should return [0,1] when firstRanking less than secondRanking", function () {
    const firstRanking = [0];
    const secondRanking = [1];
    const comparedRankings = new Triplets(firstRanking, secondRanking).compareRankings();
    expect(comparedRankings).toEqual([0,1]);
});

test("should return [0,0] when firstRanking equal secondRanking", function () {
    const firstRanking = [4];
    const secondRanking = [4];
    const comparedRankings = new Triplets(firstRanking, secondRanking).compareRankings();
    expect(comparedRankings).toEqual([0,0]);
});

test("should return [3,0] when all three firstRanking great than each secondRanking", function () {
    const firstRanking = [4, 5, 6];
    const secondRanking = [1, 2, 3];
    const comparedRankings = new Triplets(firstRanking, secondRanking).compareRankings();
    expect(comparedRankings).toEqual([3,0]);
});

test("should return [0,3] when all three firstRanking less than each secondRanking", function () {
    const firstRanking = [1, 2, 3];
    const secondRanking = [4, 5, 6];
    const comparedRankings = new Triplets(firstRanking, secondRanking).compareRankings();
    expect(comparedRankings).toEqual([0,3]);
});

test("should return [3,0] when all three firstRanking great than each secondRanking", function () {
    const firstRanking = [4, 5, 6];
    const secondRanking = [1, 2, 3];
    const comparedRankings = new Triplets(firstRanking, secondRanking).compareRankings();
    expect(comparedRankings).toEqual([3,0]);
});

test("should return [0,0] when all three firstRanking are equal to each secondRanking", function () {
    const firstRanking = [4, 4, 4];
    const secondRanking = [4, 4, 4];
    const comparedRankings = new Triplets(firstRanking, secondRanking).compareRankings();
    expect(comparedRankings).toEqual([0,0]);
});

test("should return [10,0] when all ten firstRanking great than each secondRanking", function () {
    const firstRanking = [4, 5, 6, 7, 8, 10, 44, 35, 1, 2];
    const secondRanking = [3, 4, 5, 6, 7, 9, 43, 34, 0, 1];
    const comparedRankings = new Triplets(firstRanking, secondRanking).compareRankings();
    expect(comparedRankings).toEqual([10,0]);
});

test("should throw if exists difference of length between firstRanking and secondRanking", function () {
    const firstRanking = [1, 2, 3];
    const secondRanking = [0];
    expect(() => new Triplets(firstRanking, secondRanking)).toThrow(new DifferenceBetweenRankingsLengthException());
});
