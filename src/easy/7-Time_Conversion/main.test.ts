import Timer from "./main";

test("should convert AM/PM format to military (24-hour) time", function () {
    const time = "07:05:45PM";
    const timer = new Timer(time);
    expect(timer.convertToMilitary()).toBe("19:05:45");
});

test("should convert AM/PM format to military (24-hour) time", function () {
    const time = "12:00:01AM";
    const timer = new Timer(time);
    expect(timer.convertToMilitary()).toBe("00:00:01");
});

test("should convert AM/PM format to military (24-hour) time", function () {
    const time = "12:00:01PM";
    const timer = new Timer(time);
    expect(timer.convertToMilitary()).toBe("12:00:01");
});

