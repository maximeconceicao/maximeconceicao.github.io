let n, l, vBlack, vBlue, vRed, size;

function setup() {
    var canvas =createCanvas(120, 120);
    canvas.parent('sketch-holder');
    frameRate(1);
    noStroke();

    vBlack = createVector(0, 0);
    vBlue = createVector(0, 0);
    vRed = createVector(0, 0);
    n = 8;
    l = n * n;
    size = width / n;
}

function draw() {
    background('#fafafa');
    fill(0);
    for (var i = 0; i < l; i++) {
        vBlack.x = i % n;
        vBlack.y = int(i / n);
        if (random(1) > 0.5 || vBlack.x == 0 && vBlack.y == 0 || vBlack.x == n - 1 && vBlack.y == 0 || vBlack.x == 0 && vBlack.y == n - 1 || vBlack.x == n - 1 && vBlack.y == n - 1) {
            rect(vBlack.x * size, vBlack.y * size, size, size);
        }
    }

    fill('#ee5260');
    vRed.x = int(int(random(1, n - 1)) * size);
    vRed.y = int(int(random(1, n - 1)) * size);

    rect(vRed.x, vRed.y, size, size);

    do {
        vBlue.x = int(int(random(1, n - 1)) * size);
        vBlue.y = int(int(random(1, n - 1)) * size);
    } while (vRed.x == vBlue.x && vRed.y == vBlue.y || abs(vRed.x - vBlue.x) == size && abs(vRed.y - vBlue.y) == 0 || abs(vRed.x - vBlue.x) == 0 && abs(vRed.y - vBlue.y) == size || abs(vRed.x - vBlue.x) == size && abs(vRed.y - vBlue.y) == size);

    fill('#004e89');
    rect(vBlue.x, vBlue.y, size, size);
}