import Tree from "./Tree";

export default class House {
    range: { start: number; end: number; };
    trees: Tree[];

    constructor (range: { start: number, end: number }, ...trees: Tree[]) {
        this.range = range;
        this.trees = trees;
    }

    countFruitsInHouse () {
        return this.trees.forEach(tree => {
            console.log(this.totalFruits(tree.fruitsFalled()));
        })
    }

    totalFruits (fruits: number[]) {
        return fruits.reduce((accumulator, fruit) => this.fallInHouse(fruit) ? accumulator += 1 : accumulator += 0, 0);
    }

    fallInHouse (fruit: number) {
        return fruit >= this.range.start && fruit <= this.range.end;
    }
}
