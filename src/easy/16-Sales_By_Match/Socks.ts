export default class Socks {
    socks: number[];
    
    constructor (socks: number[]) {
        this.socks = socks;
    }

    countSocksPairs () {
        let countSocksPairs = 0;
        for(let i = 0; i < this.socks.length; i++) {
            for(let j = i + 1; j < this.socks.length; j++) {
                if(this.currentSockIsEqualToNext(i, j)) {
                    countSocksPairs++;
                    this.removeCurrentSockWithPair(i, j);
                    i = this.resetSocksCount();
                    break;
                }
            }
        }
        return countSocksPairs;
    }

    currentSockIsEqualToNext(sock: number, next: number) {
        return this.socks[sock] === this.socks[next]
    }

    removeCurrentSockWithPair(current: number, pair: number) {
        this.socks = this.socks.filter((_, index) => index !== pair && index !== current);
    }

    resetSocksCount() {
        return -1;
    }

}
