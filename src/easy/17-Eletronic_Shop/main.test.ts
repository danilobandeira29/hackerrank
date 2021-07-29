import EletronicShop from "./EletronicShop";

test("should return 58 because is the most expensive keyboard and USB drive", function () {
    const budget = 60;
    const keyboards = [40, 50, 60];
    const drives = [5, 8, 12];
    const expensive = new EletronicShop(budget, keyboards, drives).mostExpensiveKit();
    expect(expensive).toBe(58);
});

test("should return 9 because is the most expensive keyboard and USB drive", function () {
    const budget = 10;
    const keyboards = [3, 1];
    const drives = [5, 2, 8];
    const expensive = new EletronicShop(budget, keyboards, drives).mostExpensiveKit();
    expect(expensive).toBe(9);
});

test("should return -1 because there is no way to buy one keyboard and one USB drive", function () {
    const budget = 5;
    const keyboards = [4];
    const drives = [5];
    const expensive = new EletronicShop(budget, keyboards, drives).mostExpensiveKit();
    expect(expensive).toBe(-1);
});
