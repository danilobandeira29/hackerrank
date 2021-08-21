export default class MigratoryBirds {
    private ids: number[];
    private birds: { id: number, count: number }[];
    private birdHighestCount = 0;
    private birdsWithSameHighestCount: { id: number, count: number }[] = [];

    constructor(ids: number[]) {
        this.ids = ids;
        this.birds = [];
    }

    getLowestBirdIdWithHighestCount() {
        this.createBirds();
        this.incrementBirdsCounter();
        this.calculateBirdWithHighestCount();
        this.calculateBirdsWithSameHighestCount();
        return this.calculateLowestIdWithHighestCount();
    }

    private createBirds() {
        this.ids.forEach(id => {
            if(this.noExistsBird(id)) return this.createUniqueBird(id);
        });
    }

    private noExistsBird(id: number) {
        return this.birds.findIndex(item => item.id === id) < 0;
    }

    private createUniqueBird(id: number) {
        this.birds.push({ id, count: 1 });
    }

    private incrementBirdsCounter() {
        this.ids.forEach(id => {
            const bird = this.birds.findIndex(bird => bird.id === id);
            this.birds[bird].count++;
        })
    }

    private calculateBirdWithHighestCount() {
        const countEachBirdtype = this.birds.map(bird => bird.count);
        this.birdHighestCount = Math.max(...countEachBirdtype);
    }

    private calculateBirdsWithSameHighestCount() {
        this.birdsWithSameHighestCount = this.birds.filter(bird => bird.count === this.birdHighestCount);
    }

    private calculateLowestIdWithHighestCount() {
        const lowestIds = this.birdsWithSameHighestCount.map(bird => bird.id);
        return Math.min(...lowestIds);
    }
}
