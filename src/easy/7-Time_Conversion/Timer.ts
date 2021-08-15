import TimerSplitter from "./TimeSplitter";

export default class Timer {
    private timerSplitter: TimerSplitter;
    private hours: string;
    private minutes: string;
    private seconds: string;
    private modifier: string;

    constructor (time: string) {
        this.timerSplitter = new TimerSplitter(time);
        const { hours, minutes, seconds, modifier } = this.timerSplitter.getTimeSplitted();
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.modifier = modifier;
    }

    convertToMilitary () {
        if(this.isMidday()) this.convertHoursToZero();
        if(this.isAfterMidday()) this.convertHoursToMilitary();
    }

    private isMidday() {
        return this.hours === "12";
    }

    private convertHoursToZero() {
        this.hours = "00";
    }

    private isAfterMidday() {
        return this.modifier === "PM";
    }

    private convertHoursToMilitary() {
        return this.hours = (parseInt(this.hours, 10) + 12).toString();
    }

    getMilitaryTime() {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }
}
