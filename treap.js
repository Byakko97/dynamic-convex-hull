class Node {
    constructor(value) {
        this.value = value;
        this.priority = random();
        this.l = null;
        this.r = null;
    }
}

class Treap {
    constructor() {
        this.root = null;
    }
}