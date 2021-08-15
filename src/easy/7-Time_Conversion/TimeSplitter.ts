export default class TimerSplitter {
    private time: string;
    private hours: string;
    private minutes: string;
    private seconds: string;
    private modifier: string;

    constructor(time: string) {
        this.time = time;
        const { hours, minutes, seconds, modifier } = this.splitTime();
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.modifier = modifier;
    }

    getTimeSplitted() {
        return { hours: this.hours, minutes: this.minutes, seconds: this.seconds, modifier: this.modifier };
    }

    getHours() {
        return this.hours;
    }

    getMinutes() {
        return this.minutes;
    }

    getSeconds() {
        return this.seconds;
    }

    getModifier() {
        return this.modifier;
    }

    splitTime() {
        const [hours, minutes, secondsWithModifier] = this.time.split(":");
        const seconds = secondsWithModifier.slice(0, 2);
        const modifier = secondsWithModifier.slice(2);
        return { hours, minutes, seconds, modifier };
    }
}