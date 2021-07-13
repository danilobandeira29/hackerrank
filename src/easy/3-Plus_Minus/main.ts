export default class PlusMinus {
    constructor () {}

    execute (values: number[]): void {
        const result = [0, 0, 0];
        for(const value of values) {
            if(value > 0) result[0] += 1;
            if(value < 0) result[1] += 1;
            if(value === 0) result[2] += 1;
        }
        for(let i = 0; i < result.length; i++) {
            console.log(result[i] = parseFloat((result[i] / values.length).toFixed(6)));
        }
    }
}