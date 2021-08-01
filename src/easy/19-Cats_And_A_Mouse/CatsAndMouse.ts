export default class CatsAndMouse {
    catALocation: number;
    catBLocation: number;
    mouseLocation: number;

    constructor (catALocation: number, catBLocation: number, mouseLocation: number) {
        this.catALocation = catALocation;
        this.catBLocation = catBLocation;
        this.mouseLocation = mouseLocation;
    }

    catch () {
        if(this.catBReachMouseFirst()) return "Cat B";
        if(this.catAReachMouseFirst()) return "Cat A";
        return "Mouse C";
    }

    catBReachMouseFirst () {
        return this.differenceBetweenMouseAndCat(this.catBLocation) < this.differenceBetweenMouseAndCat(this.catALocation);
    }

    catAReachMouseFirst () {
        return this.differenceBetweenMouseAndCat(this.catBLocation) > this.differenceBetweenMouseAndCat(this.catALocation);
    }

    differenceBetweenMouseAndCat(catBLocation: number) {
        return Math.abs(this.mouseLocation - catBLocation);
    }

}