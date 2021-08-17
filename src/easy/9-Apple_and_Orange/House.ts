import Tree from "./Tree";

export default class House {
    range: { start: number; end: number; };
    trees: Tree[];

    constructor (range: { start: number, end: number }, trees: Tree[]) {
        this.range = range;
        this.trees = trees;
    }

    countFruitsInRange () {
        return this.trees.forEach(tree => {
            console.log(this.totalEachFruitFalled(tree.distanceInPointFruitsFalled()));
        })
    }

    totalEachFruitFalled (fruitsFalledPoints: number[]) {
        return fruitsFalledPoints.reduce((accumulator, fruitFalledPoint) => {
            if(this.fallInRange(fruitFalledPoint)) return accumulator += 1;
            return accumulator += 0;
        }, 0);
    }

    fallInRange (fruitFalledPoint: number) {
        return fruitFalledPoint >= this.range.start && fruitFalledPoint <= this.range.end;
    }
}
