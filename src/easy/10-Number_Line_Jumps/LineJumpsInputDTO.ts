export default class LineJumpsInputDTO {
    firstLocation: number;
    secondLocation: number;
    firstMetersPerJump: number;
    secondMetersPerJump: number;

    constructor({ firstLocation, secondLocation, firstMetersPerJump, secondMetersPerJump }: { firstLocation: number, secondLocation: number, firstMetersPerJump: number, secondMetersPerJump: number }) {
        this.firstLocation = firstLocation;
        this.secondLocation = secondLocation;
        this.firstMetersPerJump = firstMetersPerJump;
        this.secondMetersPerJump = secondMetersPerJump;
    }
}
