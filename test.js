var points = [];
var width = 720;
var height = 360;

function setup() {
    createCanvas(width, height);
    for(let i = 0; i < 20; i++) {
        points[i] = new Point(random(0, width), random(0, height));
    }
}

function draw() {
    background(100);
    for(let i = 0; i < 20; i++) {
        points[i].draw();
    }
}