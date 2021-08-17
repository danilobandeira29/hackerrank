import Apple from "./Apple";
import Orange from './Orange';
import House from './House';
import AppleTree from "./AppleTree";
import OrangeTree from "./OrangeTree";

test("should count fruits falled in house's range", function () {
    console.log = jest.fn();
    const apple1 = new Apple(-2);
    const apple2 = new Apple(2);
    const apple3 = new Apple(1);
    const appleTree = new AppleTree(5, [apple1, apple2, apple3]);
    const orange1 = new Orange(5);
    const orange2 = new Orange(-6);
    const orangeTree = new OrangeTree(15, [orange1, orange2]);
    const range = { start: 7, end: 11 };
    new House(range,[appleTree, orangeTree]).countFruitsInRange();
    expect(console.log).toHaveBeenNthCalledWith(1, 1);
    expect(console.log).toHaveBeenNthCalledWith(2, 1);
});
