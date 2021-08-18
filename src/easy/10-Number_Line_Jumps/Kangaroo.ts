import MetersPerJump from "./MetersPerJump";
import StartLocations from "./StartLocations";
import StartLocationsImpl from "./StartLocationsImpl";
import MetersPerJumpImpl from "./MetersPerJumpImpl";

export default class Kangaroo {
    metersPerJump: MetersPerJump;
    location: StartLocations;

    constructor({ location, metersPerJump }: { location: number,  metersPerJump: number}) {
        this.location = new StartLocationsImpl(location);
        this.metersPerJump = new MetersPerJumpImpl(metersPerJump);
    }

    incrementLocation() {
        this.location.value += this.metersPerJump.value;
    }

    locationIsEqual(location: StartLocationsImpl) {
        return this.location.value === location.value;
    }
}
