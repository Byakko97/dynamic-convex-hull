const ACTIVE_COLOR = color(255, 0, 0);
const INACTIVE_COLOR = color(0);

class U_hull {
    constructor(treap) {
        if(treap === undefined)
            treap = null;
        else if(treap instanceof Point)
            treap = Treap(treap);
        this.treap = treap;
        this.active = true;
    }
    draw() {
        cur_color = this.active ? ACTIVE_COLOR : INACTIVE_COLOR;
        // TODO: inorder traversal of treap
    }
}

// Returns the two points that define the line tangent to
// left and right hulls
function bridge(left, right) {
    // TODO
}

// Joins left and right hulls into a single one
function join(left, right) {
    var p, q;
    [p, q] = bridge(left, right);
    var left_side, right_side;
    [left_side, left.treap] = split(left.treap, p);
    [right.treap, right_side] = split(right.treap, Point(q.x, q.y - 1));
    left.active = false;
    right.active = false;
    return U_hull(merge(left_side, right_side));
}