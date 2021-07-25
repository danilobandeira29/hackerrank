export default class Score {
    value: number;
    
    constructor (value: number) {
        if(value < 1) throw new Error("Value must be greater or equal to 1.");
        this.value = value;
    }
}
