import ChocolateBar from "./ChocolateBar";

test("should divide the chocolate bar 2 times", function () {
    const segment = [2, 2, 1, 3, 2];
    const birthDate = { day: 4, month: 2 };
    const chocolate = new ChocolateBar(segment, birthDate);
    const manyTimesCanDivide = chocolate.manyTimesCanDivide();
    expect(manyTimesCanDivide).toBe(2);
});

test("should divide the chocolate bar 2 times", function () {
    const segment = [1, 2, 1, 3, 2];
    const birthDate = { day: 3, month: 2 };
    const chocolate = new ChocolateBar(segment, birthDate);
    const manyTimesCanDivide = chocolate.manyTimesCanDivide();
    expect(manyTimesCanDivide).toBe(2);
});

test("should divide the chocolate bar 0 times", function () {
    const segment = [1, 1, 1, 1, 1, 1];
    const birthDate = { day: 3, month: 2 };
    const chocolate = new ChocolateBar(segment, birthDate);
    const manyTimesCanDivide = chocolate.manyTimesCanDivide();
    expect(manyTimesCanDivide).toBe(0);
});

test("should divide the chocolate bar 1 times", function () {
    const segment = [4];
    const birthDate = { day: 4, month: 1 };
    const chocolate = new ChocolateBar(segment, birthDate);
    const manyTimesCanDivide = chocolate.manyTimesCanDivide();
    expect(manyTimesCanDivide).toBe(1);
});
