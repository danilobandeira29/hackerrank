import Cake from "./main";

test("should return the count of the tallest candle", function () {
    const candles = [3, 2, 1, 3];
    const cake = new Cake(candles);
    expect(cake.countCandles()).toBe(2);
});
