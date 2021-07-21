import Fruit from "./Fruit";
import Tree from "./Tree";

test("should create tree with root and fruits", function () {
    const root = 5;
    const fruit1 = new Fruit(-2);
    const fruit2 = new Fruit(2);
    const fruit3 = new Fruit(1);
    const tree = new Tree(root, [fruit1, fruit2, fruit3]);
    expect(tree.fruitsFalled()).toEqual([3, 7, 6]);
});
