export default abstract class StartLocations {
    value: number;

    protected constructor(value: number) {
        if(StartLocations.isInvalidStart(value)) throw new Error("Invalid start input.");
        this.value = value;
    }

    private static isInvalidStart(value: number) {
        return value < 0;
    }
}
