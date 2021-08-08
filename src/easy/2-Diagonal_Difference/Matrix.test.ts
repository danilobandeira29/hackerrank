import Matrix from "./Matrix";

test("should calculate diagonal difference of a 3x3 matrix", function () {
    const matrix = [
        [1, 2, 4],
        [5, 6, 7],
        [10, 22, -1]
    ];
    const diagonalDifference = Matrix.diagonalDifference(matrix);
    expect(diagonalDifference).toBe(14);
});

test("should calculate diagonal difference of a 4x4 matrix", function () {
    const matrix = [
        [1, 2, 4, 0],
        [5, 6, 7, 10],
        [10, 22, -1, 3],
        [5, 0, -1, -2]
    ];
    const diagonalDifference = Matrix.diagonalDifference(matrix);
    expect(diagonalDifference).toBe(30);
});
