import Fruit from "./Fruit";

export default abstract class Tree {
    root: number;
    fruits: Fruit[];

    constructor (root: number, fruits: Fruit[]) {
        this.root = root;
        this.fruits = fruits;
    }

    distanceInPointFruitsFalled () {
        return this.fruits.map(fruit => fruit.point + this.root);
    }
}