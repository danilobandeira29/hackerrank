export default class Staircase {
    static print(staircaseSize: number) {
        let staircase = '';
        for(let i = 0; i < staircaseSize; i++) {
            staircase = this.appendStep(staircase);
            const stepFineshed = this.appendEmptySpaceIfNecessary(staircase, staircaseSize, i);
            console.log(stepFineshed);
        }
    }

    private static appendStep(staircase: string) {
        return staircase + "#";
    };

    private static appendEmptySpaceIfNecessary(staircase: string, staircaseSize: number, index: number) {
        return staircase.padStart((staircaseSize - index - 1) + staircase.length, " ");
    }
    
}
