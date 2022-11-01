new p5;

const POINT_COLOR = color(0, 0, 255);
const POINT_DIAM = 5;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Compares this point with another by x coordinate
    less_than(other) {
        return this.x != other.x ? this.x < other.x : this.y < other.y;
    }
    draw() {
        noStroke();
        fill(POINT_COLOR);
        ellipse(this.x, this.y, POINT_DIAM, POINT_DIAM);
    }
}


// Two times the area of triangle abc
function area2(a, b, c) {
    va = createVector(a.x, a.y);
    vb = createVector(a.x, a.y);
    vc = createVector(c.x, c.y);
    vb.sub(va);
    vc.sub(va);
    return vbase.cross(vc);
}

// Is point c at the left of the line ab?
function left(a, b, c) {
    return area2(a, b, c) > 0;
}