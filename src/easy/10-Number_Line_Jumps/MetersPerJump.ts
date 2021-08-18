export default abstract class MetersPerJump {
    value: number;

    protected constructor(value: number) {
        if(MetersPerJump.isInvalidJump(value)) throw new Error("Invalid jump input.");
        this.value = value;
    }

    private static isInvalidJump(value: number) {
        return value <= 0;
    }
}
