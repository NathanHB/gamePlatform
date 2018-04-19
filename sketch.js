var character;
var ground;
var platforms;
var plat;
var wallLeft;
var jump = 7;
var gravity = 0.3;
var jumpAllow = false;
var bullets;

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

	bullets = new Group();

	platforms = new Group();
	for (var i = 0; i < 5; i++) {
		x = Math.floor((Math.random() * 1000) + 1);
		y = Math.floor((Math.random() * 500) + 1);
		createPlatform(x, y, 200, 10);
	}

}

function draw() {
	background(0);
	drawSprites();

	jumpAllow = true;
	for (var i = 0; i < platforms.length; i++) {
		if (character.collide(ground) || character.collide(platforms[i])){
			character.velocity.y = 0;
			jumpAllow = true;
		}
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

	if (keyWentDown("z")){
		bullet = createSprite(character.position.x, character.position.y, 10, 10);
		bullets.add(bullet);
	}

	for (var i = 0; i < bullets.length; i++){
		bullets[i].velocity.x = 5;
		for (var k = 0; k < platforms.length; k++){
			if(bullets[i].collide(platforms[k])){
				bullets[i].remove();
				break
			}
		}
	}

}

function createPlatform(_x, _y, _h, _w){
	plat = createSprite(_x, _y, _h, _w);
	platforms.add(plat);
}
