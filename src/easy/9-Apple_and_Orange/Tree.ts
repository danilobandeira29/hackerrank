import Fruit from "./Fruit";

export default class Tree {
    root: number;
    fruits: Fruit[];

    constructor (root: number, fruits: Fruit[]) {
        this.root = root;
        this.fruits = fruits;
    }

    fruitsFalled () {
        return this.fruits.map(fruit => fruit.point + this.root);
    }
}