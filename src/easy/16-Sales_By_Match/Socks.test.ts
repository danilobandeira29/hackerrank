import Socks from "./Socks";

test("should count pairs of stocks with matching colors", function () {
    const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const count = new Socks(socks).countSocksPairs();
    expect(count).toBe(3);
});

test("should count pairs of stocks with matching colors", function () {
    const socks = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
    const count = new Socks(socks).countSocksPairs();
    expect(count).toBe(4);
});
