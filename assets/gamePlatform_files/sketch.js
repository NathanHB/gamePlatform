var character;
var ground;
var platforms;
var wallLeft;
var jump = 7;
var gravity = 0.3;

function setup() {
	createCanvas(1000, 600);

	character = createSprite(20, 300, 20, 20);
	character.speed = 3;
	character.setCollider('rectangle', 0, 0, 20, 20);

	groundImg = loadImage("assets/ground.png");
	ground = createSprite(width/2, height-50);
	ground.immovable = true;
	ground.addImage(groundImg);
	// ground.width = 2000;
	ground.scale = 1.2;

	wallLeft = createSprite(0, height/2, 10, height);
	wallLeft.immovable = true;
	platforms = new Group();
	console.log(ground.width)
	ground.width = 1.5;
	console.log(ground.width)
}

function draw() {
	background(0);
	drawSprites();

	character.debug = mouseIsPressed;
	ground.debug = mouseIsPressed;
	wallLeft.debug = mouseIsPressed;
	character.velocity.x = 0;
  	character.velocity.y += gravity;
	if (character.collide(ground)){
		character.velocity.y = 0;
	}


	if (keyIsDown(RIGHT_ARROW)){
		character.velocity.x = 3;
	}else if (keyIsDown(LEFT_ARROW)){
		character.velocity.x = -3;
	}
	if(keyWentDown(" ")){
		character.velocity.y = -jump;
	}


}
