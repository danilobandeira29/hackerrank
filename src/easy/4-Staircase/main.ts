export default class Staircase {

    constructor () {}

    print(size: number) {
        let tree = '';
        for(let index = 0; index < size; index++) {
            tree = tree + "#";
            const row = tree.padStart((size - index - 1) + tree.length, " ");
            console.log(row);
        }
    }
}