import ChocolateBar from "./ChocolateBar";

test("should divide the chocolate bar 2 times", function () {
    const selected = [2, 2, 1, 3, 2];
    const birthDay = 4;
    const birthMonth = 2;
    const chocolate = new ChocolateBar(selected, birthDay, birthMonth);
    const divided = chocolate.divide();
    expect(divided).toBe(2);
});

test("should divide the chocolate bar 2 times", function () {
    const selected = [1, 2, 1, 3, 2];
    const birthDay = 3;
    const birthMonth = 2;
    const chocolate = new ChocolateBar(selected, birthDay, birthMonth);
    const divided = chocolate.divide();
    expect(divided).toBe(2);
});


test("should divide the chocolate bar 0 times", function () {
    const selected = [1, 1, 1, 1, 1, 1];
    const birthDay = 3;
    const birthMonth = 2;
    const chocolate = new ChocolateBar(selected, birthDay, birthMonth);
    const divided = chocolate.divide();
    expect(divided).toBe(0);
});

test("should divide the chocolate bar 1 times", function () {
    const selected = [4];
    const birthDay = 4;
    const birthMonth = 1;
    const chocolate = new ChocolateBar(selected, birthDay, birthMonth);
    const divided = chocolate.divide();
    expect(divided).toBe(1);
});
