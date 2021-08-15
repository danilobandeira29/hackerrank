import TimeSplitter from "./TimeSplitter";

test("should split time 07:05:45PM to get hours", function () {
    const time = "07:05:45PM";
    const hours = new TimeSplitter(time).getHours();
    expect(hours).toBe("07");
});

test("should split time 07:05:45PM to get minutes", function () {
    const time = "07:05:45PM";
    const minutes = new TimeSplitter(time).getMinutes();
    expect(minutes).toBe("05");
});

test("should split time 07:05:45PM to get seconds", function () {
    const time = "07:05:45PM";
    const seconds = new TimeSplitter(time).getSeconds();
    expect(seconds).toBe("45");
});

test("should split time 07:05:45PM to get modifier", function () {
    const time = "07:05:45PM";
    const modifier = new TimeSplitter(time).getModifier();
    expect(modifier).toBe("PM");
});

test("should split timer 07:05:45PM to hours, minutes, seconds and modifier", function () {
    const time = "07:05:45PM";
    const timeSplitted = new TimeSplitter(time).getTimeSplitted();
    expect(timeSplitted).toEqual({ hours: "07", minutes: "05", seconds: "45", modifier: "PM" });
});
