export default class Cake {
    candles: number[];
    tallestCandle: number;

    constructor (candles: number[]) {
        this.candles = candles;
        this.tallestCandle = Math.max(...this.candles);
    }

    countCandles(): number {
        return this.candles.reduce((accumulator, current) => {
            if(current === this.tallestCandle) return accumulator += 1;
            return accumulator += 0;
        }, 0);
    }
}
