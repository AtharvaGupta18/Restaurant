function setup() {
  createCanvas(1500, 1000)
  init();
}

function draw() {
  background('#ffd66e')

  line(255, 1, 255, screen.height - 155)
	textSize(32);
	text("Food Items", 50, 35)
	fill('DarkBlue');
	line(1, 50, 255, 50)
	strokeWeight(3);
	line(3, 3, 3, screen.height - 155)

  drawSprites()
}