let points = [];

function setup() {
    createCanvas(720, 360);
    for(let i = 0; i < 20; i++) {
        points[i] = new Point(random(0, 720), random(0, 360));
    }
}

function draw() {
    background(100);
    for(let i = 0; i < 20; i++) {
        points[i].draw();
    }
}