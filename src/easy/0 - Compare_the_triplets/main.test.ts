import DifferenceBetweenRankingsAmountException from "./DifferenceBetweenRankingsAmountException";
import CompareTriples from "./main";

test("should return [1,0] when aliceRanking[0] great than bobRanking[0]", function () {
    const aliceRanking = [1];
    const bobRanking = [0];
    const result = new CompareTriples().execute(aliceRanking, bobRanking);
    expect(result).toEqual([1,0]);
});

test("should return [0,1] when aliceRanking[0] less than bobRanking[0]", function () {
    const aliceRanking = [0];
    const bobRanking = [1];
    const result = new CompareTriples().execute(aliceRanking, bobRanking);
    expect(result).toEqual([0,1]);
});

test("should return [0,0] when aliceRanking[0] equal bobRanking[0]", function () {
    const aliceRanking = [4];
    const bobRanking = [4];
    const result = new CompareTriples().execute(aliceRanking, bobRanking);
    expect(result).toEqual([0,0]);
});

test("should return [3,0] when all three aliceRanking great than each bobRanking", function () {
    const aliceRanking = [4, 5, 6];
    const bobRanking = [1, 2, 3];
    const result = new CompareTriples().execute(aliceRanking, bobRanking);
    expect(result).toEqual([3,0]);
});

test("should return [0,3] when all three aliceRanking less than each bobRanking", function () {
    const aliceRanking = [1, 2, 3];
    const bobRanking = [4, 5, 6];
    const result = new CompareTriples().execute(aliceRanking, bobRanking);
    expect(result).toEqual([0,3]);
});

test("should return [3,0] when all three aliceRanking great than each bobRanking", function () {
    const aliceRanking = [4, 5, 6];
    const bobRanking = [1, 2, 3];
    const result = new CompareTriples().execute(aliceRanking, bobRanking);
    expect(result).toEqual([3,0]);
});

test("should return [0,0] when all three aliceRanking are equal to each bobRanking", function () {
    const aliceRanking = [4, 4, 4];
    const bobRanking = [4, 4, 4];
    const result = new CompareTriples().execute(aliceRanking, bobRanking);
    expect(result).toEqual([0,0]);
});

test("should return [10,0] when all ten aliceRanking great than each bobRanking", function () {
    const aliceRanking = [4, 5, 6, 7, 8, 10, 44, 35, 1, 2];
    const bobRanking = [3, 4, 5, 6, 7, 9, 43, 34, 0, 1];
    const result = new CompareTriples().execute(aliceRanking, bobRanking);
    expect(result).toEqual([10,0]);
});

test("should throw if exists difference between aliceRanking and bobRanking", function () {
    const aliceRanking = [1, 2, 3];
    const bobRanking = [0];
    expect(() => new CompareTriples().execute(aliceRanking, bobRanking)).toThrow(new DifferenceBetweenRankingsAmountException());
});
