import Bill from "./Bill";

test("should print 5 because it's the money that Brian have to refund Anna", function () {
    const itemsEaten = [3, 10, 2, 9];
    const itemEatenForOnePerson = 1;
    const moneyPayed = 12;
    console.log = jest.fn();
    new Bill(itemsEaten, itemEatenForOnePerson, moneyPayed).calculate();
    const refundAnna = 5;
    expect(console.log).toHaveBeenNthCalledWith(1, refundAnna);
});

test("should print Bon Appetit because Brian does not have to refund Anna", function () {
    const itemsEaten = [3, 10, 2, 9];
    const itemEatenForOnePerson = 1;
    const moneyPayed = 7;
    console.log = jest.fn();
    new Bill(itemsEaten, itemEatenForOnePerson, moneyPayed).calculate();
    expect(console.log).toHaveBeenNthCalledWith(1, "Bon Appetit");
});
