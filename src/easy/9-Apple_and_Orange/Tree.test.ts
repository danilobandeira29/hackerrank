import Apple from "./Apple";
import AppleTree from "./AppleTree";

test("should return the distance in points of Apples falled", function () {
    const root = 5;
    const apple1 = new Apple(-2);
    const apple2 = new Apple(2);
    const apple3 = new Apple(1);
    const tree = new AppleTree(root, [apple1, apple2, apple3]);
    expect(tree.distanceInPointFruitsFalled()).toEqual([3, 7, 6]);
});
