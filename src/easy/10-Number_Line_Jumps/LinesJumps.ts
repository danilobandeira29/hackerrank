import Kangaroo from "./Kangaroo";
import LineJumpsInputDTO from "./LineJumpsInputDTO";

export default class LineJumps {
    private STEPS = 10000;
    
    execute(lineJumpsInputDTO: LineJumpsInputDTO) {
        const { firstKangaroo, secondKangaroo } = LineJumps.createKangaroos(lineJumpsInputDTO);
        for(let location = 0; location < this.STEPS; location++) {
            LineJumps.incrementKangaroosLocation(firstKangaroo, secondKangaroo);
            if(LineJumps.kangaroosAtTheSameLocation(firstKangaroo, secondKangaroo)) return LineJumps.yes();
        }
        return LineJumps.no();
    }

    private static createKangaroos(lineJumpsInputDTO: LineJumpsInputDTO) {
        const firstKangaroo = new Kangaroo({
            location: lineJumpsInputDTO.firstLocation,
            metersPerJump: lineJumpsInputDTO.firstMetersPerJump
        });
        const secondKangaroo = new Kangaroo({
            location: lineJumpsInputDTO.secondLocation,
            metersPerJump: lineJumpsInputDTO.secondMetersPerJump
        });
        return { firstKangaroo, secondKangaroo };
    }

    private static incrementKangaroosLocation(firstKangaroo: Kangaroo, secondKangaroo: Kangaroo) {
        firstKangaroo.incrementLocation();
        secondKangaroo.incrementLocation();
    }

    private static kangaroosAtTheSameLocation(firstKangaroo: Kangaroo, secondKangaroo: Kangaroo) {
        return firstKangaroo.locationIsEqual(secondKangaroo.location);
    }

    private static yes() {
        return "YES";
    }

    private static no() {
        return "NO";
    }
}