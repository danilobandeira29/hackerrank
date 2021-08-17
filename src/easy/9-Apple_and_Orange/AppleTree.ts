import Tree from "./Tree";
import Apple from './Apple';

export default class AppleTree extends Tree {
    constructor(root: number, apples: Apple[]) {
        super(root, apples);
    }
};
