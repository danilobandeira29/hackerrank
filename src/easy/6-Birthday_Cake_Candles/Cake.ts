export default class Cake {
    candles: number[];
    tallestCandle: number;

    constructor (candles: number[]) {
        this.candles = candles;
        this.tallestCandle = Math.max(...this.candles);
    }

    countTallestCandle(): number {
        return this.candles.reduce((accumulator, current) => {
            if(this.isTallestCandle(current)) return accumulator += 1;
            return accumulator += 0;
        }, 0);
    }

    isTallestCandle(current: number) {
        return current === this.tallestCandle;
    }
}
