import Fruit from "./Fruit";
import Tree from "./Tree";
import House from './main';

test("should count fruits falled in house range", function () {
    console.log = jest.fn();
    const apple1 = new Fruit(-2);
    const apple2 = new Fruit(2);
    const apple3 = new Fruit(1);
    const appleTree = new Tree(5, [apple1, apple2, apple3]);
    const orange1 = new Fruit(5);
    const orange2 = new Fruit(-6);
    const orangeTree = new Tree(15, [orange1, orange2]);
    const range = { start: 7, end: 11 };
    new House(range, appleTree, orangeTree).countFruitsInHouse();
    expect(console.log).toHaveBeenNthCalledWith(1, 1);
    expect(console.log).toHaveBeenNthCalledWith(2, 1);
});
