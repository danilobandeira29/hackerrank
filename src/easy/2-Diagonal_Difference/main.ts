export default class DiagonalDifference {
    constructor () {}

    execute (matrix: number[][]) {
        const leftToRight = this.calculateDiagonal(matrix);
        const rightToLeft = this.calculateDiagonal(matrix, matrix.length - 1);
        return Math.abs(leftToRight - rightToLeft);
    }

    calculateDiagonal (matrix: number[][], factor: number = 0) {
        let diagonal = 0;
        for(let index = 0; index < matrix.length; index++) {
            diagonal += matrix[index][Math.abs(index - factor)];
        }
        return diagonal;
    }
}
