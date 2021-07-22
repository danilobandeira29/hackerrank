export default class LineJumps {
    startLocation1: number;
    metersPerJump1: number;
    startLocation2: number;
    metersPerJump2: number;

    constructor (startLocation1: number, metersPerJump1: number, startLocation2: number, metersPerJump2: number) {
        if(startLocation1 < 0 || startLocation2 < 0) throw new Error("Invalid start input.");
        if(metersPerJump1 <= 0 || metersPerJump2 <= 0) throw new Error("Invalid jump input.");
        this.startLocation1 = startLocation1;
        this.metersPerJump1 = metersPerJump1;
        this.startLocation2 = startLocation2;
        this.metersPerJump2 = metersPerJump2;
    }

    execute() {
        let kangaroo1 = this.startLocation1;
        let kangaroo2 = this.startLocation2;
        let result = 'NO';
        for(let location = 0; location < 10000; location++) {
            kangaroo1 += this.metersPerJump1;
            kangaroo2 += this.metersPerJump2;
            if(kangaroo1 === kangaroo2) return result = "YES";
        }
        return result;
    }
}