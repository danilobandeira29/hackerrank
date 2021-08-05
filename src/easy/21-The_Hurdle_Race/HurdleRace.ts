export default class HurdleRace {
    currentJumpHeight: number;
    heights: number[];

    constructor (currentJumpHeight: number, heights: number[]) {
        this.currentJumpHeight = currentJumpHeight;
        this.heights = heights;
    }

    quantityPotionsToJumpAllHeights () {
        const jumpNeeded = Math.max(...this.heights) - this.currentJumpHeight;
        const needTakePotion = jumpNeeded >= 1;
        return needTakePotion ? jumpNeeded : 0;
    }
}
