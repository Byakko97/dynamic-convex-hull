class Treap {
    constructor(key) {
        this.key = key;
        this.priority = random();
        this.l = null;
        this.r = null;
    }
}

// Splits the treap t into two. One with all its keys less than x
// and the other one with the rest
function split(t, x) {
    if(!t) return [null, null];
    if(t.key.less_than(x) ) {
        var right;
        [t.r, right] = split(t.r, x);
        return [t, right];
    } else {
        var left;
        [left, t.l] = split(t.l, x);
        return [left, t];
    }
}

// Merges treaps left and right in a single one
function merge(left, right) {
    if(!left) return right;
    if(!right) return left;
    if(left.priority > right.priority) {
        left.r = merge(left.r, right);
        return left;
    } else {
        right.l = merge(left, right.l);
        return right;
    }
}