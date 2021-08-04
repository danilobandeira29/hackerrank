export default class Valley {
    steps: string[];

    constructor (steps: string[]) {
        this.steps = steps;
    }

    count () {
        let countStep = 0;
        return this.steps.reduce((valleys, currentStep) => {
            const isUphill = currentStep === "U";
            countStep += isUphill ? 1 : -1;
            if(isUphill && this.isValleyWalked(countStep)) return valleys += 1;
            return valleys;
        }, 0);
    }

    isValleyWalked (countStep: number) {
        return countStep === 0;
    }

}
