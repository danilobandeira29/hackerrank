export default class MinMaxSum {
    allPossibilities: number[];
    values: number[];

    constructor (values: number[]) {
        if(!values.length) throw new Error("Invalid values length.");
        this.values = values;
        this.allPossibilities = [];
    }

    calculate(): void {
        for(let index = 0; index < this.values.length; index++) {
            this.allPossibilities.push(this.sum(index));
        }
        this.print();
    }

    sum(ignoredIndex: number): number {
        return this.values.reduce((accumulator, current, index) => {
            if(index === ignoredIndex) return accumulator += 0;
            return accumulator += current;
        }, 0);
    }

    print(): void {
        console.log(`${Math.min(...this.allPossibilities)} ${Math.max(...this.allPossibilities)}`);
    }
}
