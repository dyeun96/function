function setup()
{
	createCanvas(800, 800);
}

function draw()
{
	background(0);
	fill(255);
	ellipse(mouseX, mouseY, 100, 100);

	fill(255);
	ellipse(300, 300, 200, 200);
	fill(0);
	ellipse(300, 300, 120, 120);
}