function setup()
{
	createCanvas(800, 800);
}

function draw()
{
	background(0);
	fill(255);
	ellipse(mouseX, mouseY, 100, 100);

	drawDonut(255, 21, 21, 100, 100);
	drawDonut(255, 54, 54, 300, 100);
	drawDonut(255, 123, 123, 400, 200);
	drawDonut(255, 195, 195, 500, 300);
}

function drawDonut(r,g,b, x, y)
{
	// doughnut #1
	fill(r,g,b);
	ellipse( x, y, 200, 200);
	fill(0);
	ellipse( x, y, 120, 120);
}