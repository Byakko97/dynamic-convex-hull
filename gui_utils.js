// Helpful functions for gui operations

// Draw a color col line between points p and q
function draw_line(p, q, col) {
    fill(col);
    line(p.x, p.y, q.x, q.y);
}