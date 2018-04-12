var character;
var ground;
var platforms;
var wallLeft;
var jump = 7;
var gravity = 0.3;
var jumpAllow = false;

function setup() {
	createCanvas(1000, 600);

	character = createSprite(20, 300, 20, 20);
	character.speed = 3;

	groundImg = loadImage("assets/ground.png");
	ground = createSprite(width/2, height+80);
	ground.immovable = true;
	ground.addImage(groundImg);
	ground.scale = 2;

	wallLeft = createSprite(0, height/2, 10, height);
	wallLeft.immovable = true;

	platforms = new Group();

}

function draw() {
	background(0);
	drawSprites();

	jumpAllow = false;
	if (character.collide(ground)){
		character.velocity.y = 0;
		jumpAllow = true;
	}
	character.debug = mouseIsPressed;
	ground.debug = mouseIsPressed;
	wallLeft.debug = mouseIsPressed;
	character.velocity.x = 0;
  	character.velocity.y += gravity;

	if (keyIsDown(RIGHT_ARROW)){
		character.velocity.x = 3;
	}else if (keyIsDown(LEFT_ARROW)){
		character.velocity.x = -3;
	}
	if(keyWentDown(" ") && jumpAllow){
		character.velocity.y = -jump;
	}



}
