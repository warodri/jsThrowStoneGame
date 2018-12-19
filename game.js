var canvasW = 700;
var canvasH = 300;

function setup() {
	createCanvas(canvasW, canvasH);
	setFrameRate(50);
}

var x = 0;
var y = -10;
var w = 10;
var h = 10;
var percent = 100;

var forceFromLeft = 2;  // force pushing from left to right
var forceUp = 4;        // force pushing top
var forceFromRight = 0; // eg: some wind

function draw() {
	background(200);
	drawHorizont();
	
	drawTheStone();
	
	x += (100 * forceFromLeft) / 100;
	
	// the stone goes up in a "percent" amount of "forceUp"
	y -= (percent * forceUp) / 100;
	// that percent goes down because of gravity
	percent --;
	
	// Force from left decreases if some force from right
	forceFromLeft -= (forceFromRight * forceFromLeft) / 100;
	
	// Stone reaches the floor?
	if ((y + h) >= 0) { 
		y = 0 - h; // keep the y on zero
		// force from right increases! 
		// in this case, the force from right is the floor
		forceFromRight ++; 
	}	
}

function drawTheStone() {
	fill(255);
	rect(x,y,w,h);
}

function drawHorizont() {
	translate(0, canvasH-10);
	line(0, 0, canvasW, 0);
}


