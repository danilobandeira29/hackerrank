export default class EletronicShop {
    budget: number;
    keyboards: number[];
    drives: number[];
    NOT_POSSIBLE_TO_BUY_A_KIT = -1;

    constructor (budget: number, keyboards: number[], drives: number[]) {
        this.budget = budget;
        this.keyboards = keyboards;
        this.drives = drives;
    }

    mostExpensiveKit (){
        const kitsPossibleToBuy: number[] = [];
        for(const keyboard of this.keyboards) {
            this.sumWithDrive(keyboard, kitsPossibleToBuy);
        }
        if(!kitsPossibleToBuy.length) return this.NOT_POSSIBLE_TO_BUY_A_KIT;
        return Math.max(...kitsPossibleToBuy);
    }

    sumWithDrive(keyboard: number, kitsPossibleToBuy: number[]) {
        for(const drive of this.drives) {
            if(this.isPossibleToBuy(keyboard, drive)) kitsPossibleToBuy.push(keyboard + drive);
        }
    }

    isPossibleToBuy(keyboard: number, drive: number) {
        return keyboard + drive <= this.budget;
    }
}
