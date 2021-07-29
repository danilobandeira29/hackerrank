export default class Socks {
    socks: number[];
    length: number;

    constructor (length: number, socks: number[]) {
        this.socks = socks;
        this.length = length;
    }

    countPairs () {
        let countPairs = 0;
        let current = 0;
        while(current < this.length) {
            for(let next = current + 1; next < this.length; next++) {
                if(this.currentIsEqualNext(current, next)) {
                    countPairs++;
                    this.removePairSocks(next, current);
                    current = -1;
                    next = this.length;
                }
            }
            current++;
        }
        return countPairs;
    }

    currentIsEqualNext(sock: number, next: number) {
        return this.socks[sock] === this.socks[next]
    }

    removePairSocks(next: number, current: number) {
        this.socks = this.socks.filter((_, index) => index !== next && index !== current);
        this.length = this.length - 2;
    }

}
