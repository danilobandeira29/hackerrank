import Tree from "./Tree";
import Orange from './Orange';

export default class OrangeTree extends Tree {
    constructor(root: number, oranges: Orange[]) {
        super(root, oranges);
    }
};
