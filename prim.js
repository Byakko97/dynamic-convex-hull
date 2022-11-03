new p5;

const POINT_COLOR = color(0, 0, 255);
const POINT_DIAM = 5;
const EPS = 1e-7;

function f_equal(a, b) {
    return abs(a - b) < EPS;
}

function f_less(a, b) {
    return a < b - EPS;
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Compares this point with another by x coordinate
    less_than(other) {
        return !f_equal(x, other.x) ? f_less(this.x, other.x) : f_less(this.y, other.y);
    }
    draw() {
        noStroke();
        fill(POINT_COLOR);
        ellipse(this.x, this.y, POINT_DIAM, POINT_DIAM);
    }
}


// Two times the area of triangle abc
function area2(a, b, c) {
    let va = createVector(a.x, a.y);
    let vb = createVector(a.x, a.y);
    let vc = createVector(c.x, c.y);
    vb.sub(va);
    vc.sub(va);
    return vbase.cross(vc);
}

// Is point c at the left of the line ab?
function left(a, b, c) {
    return f_less(0, area2(a, b, c));
}