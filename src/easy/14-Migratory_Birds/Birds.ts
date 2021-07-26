export default class Birds {
    ids: number[];
    birds: { id: number,count: number }[];

    constructor (ids: number[]) {
        this.ids = ids;
        this.birds = [];
    }

    lowestIdMostRepeated () {
        this.countRepeated();
        const allCountBirds = this.birds.map(bird => bird.count);
        const highestCount = Math.max(...allCountBirds);
        const birdsHighestCount = this.birds.filter(bird => bird.count === highestCount);
        const allLowestIds = birdsHighestCount.map(bird => bird.id);
        return Math.min(...allLowestIds);
    }

    countRepeated () {
        this.ids.forEach(id => {
            const findIndex = this.birds.findIndex(item => item.id === id);
            if(findIndex < 0) return this.birds.push({ id, count: 1 });
            return this.birds[findIndex].count++;
        });
    }
}