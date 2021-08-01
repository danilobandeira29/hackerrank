import CatsAndMouse from "./CatsAndMouse";

test("should return Cat B because catches the mouse first", function () {
    const catALocation = 2;
    const catBLocation = 5;
    const mouseLocation = 4;
    const catches = new CatsAndMouse(catALocation, catBLocation, mouseLocation).catch();
    expect(catches).toBe("Cat B");
});

test("should return Cat B because catches the mouse first", function () {
    const catALocation = 1;
    const catBLocation = 2;
    const mouseLocation = 3;
    const catches = new CatsAndMouse(catALocation, catBLocation, mouseLocation).catch();
    expect(catches).toBe("Cat B");
});

test("should return Cat A because catches the mouse first", function () {
    const catALocation = 1;
    const catBLocation = 10;
    const mouseLocation = 3;
    const catches = new CatsAndMouse(catALocation, catBLocation, mouseLocation).catch();
    expect(catches).toBe("Cat A");
});

test("should return Mouse C because the cats reach the mouse at the same time, the two cats fight and mouse escapes", function () {
    const catALocation = 1;
    const catBLocation = 3;
    const mouseLocation = 2;
    const catches = new CatsAndMouse(catALocation, catBLocation, mouseLocation).catch();
    expect(catches).toBe("Mouse C");
});
