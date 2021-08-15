import Timer from "./Timer";

test("should convert 07:05:45PM to military time 19:05:45", function () {
    const time = "07:05:45PM";
    const timer = new Timer(time);
    timer.convertToMilitary();
    expect(timer.getMilitaryTime()).toBe("19:05:45");
});

test("should convert 12:00:01AM to military time 00:00:01", function () {
    const time = "12:00:01AM";
    const timer = new Timer(time);
    timer.convertToMilitary();
    expect(timer.getMilitaryTime()).toBe("00:00:01");
});

test("should convert 12:00:01PM to military time 12:00:01", function () {
    const time = "12:00:01PM";
    const timer = new Timer(time);
    timer.convertToMilitary()
    expect(timer.getMilitaryTime()).toBe("12:00:01");
});
