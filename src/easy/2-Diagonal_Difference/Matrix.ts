export default class Matrix {
    static diagonalDifference (matrix: number[][]) {
        const leftToRight = this.calculateDiagonal(matrix);
        const rightToLeft = this.calculateDiagonal(matrix, matrix.length - 1);
        return Math.abs(leftToRight - rightToLeft);
    }

    private static calculateDiagonal (matrix: number[][], factor: number = 0) {
        let diagonal = 0;
        for(let i = 0; i < matrix.length; i++) {
            diagonal += matrix[i][Math.abs(i - factor)];
        }
        return diagonal;
    }
}
