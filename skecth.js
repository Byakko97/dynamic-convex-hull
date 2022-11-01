let points = [];

function setup() {
    createCanvas(720, 360);
    for(let i = 0; i < 20; i++) {
        points[i++] = new Point(random(), random());
    }
}

function draw() {
    background(100);
    for(let i = 0; i < 20; i++) {
        points[i].draw();
    }
}