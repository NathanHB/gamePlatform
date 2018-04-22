var character;
var ground;
var platforms;
var plat;
var wallLeft;
var jump = 7;
var gravity = 0.3;
var jumpAllow = false;
var bullets;
var platforms;
var enemies;

function setup() {
	createCanvas(1000, 600);

	// setup for the character
	character = createSprite(20, 300, 20, 20);
	character.speed = 3;

	// setup for the enemies
	enemies = new Group();
	for (let i = 1; i <= 5; i++) {
		enemy = createSprite(200 * i, 300, 20, 20);
		enemies.add(enemy);
	}

	// setup for the ground
	groundImg = loadImage("assets/ground.png");
	ground = createSprite(width / 2, height + 80);
	ground.addImage(groundImg);
	ground.scale = 2;

	// setup for the leftBound
	wallLeft = createSprite(-290, height / 2, 10, height);
	wallLeft.immovable = true;

	// setup for the bullets
	bullets = new Group();

	// setup for the platforms
	platImg = loadImage("assets/New Piskel.png");
	platforms = new Group();
	for (var i = 0; i < 8; i++) {
		// x = Math.floor((Math.random() * 1000) + 1);
		// y = Math.floor((Math.random() * 500) + 1);
		createPlatform(150 * i, 300, 20, 10);
	}

}

function draw() {
	background(0);
	drawSprites();

	character.debug = true;
	ground.debug = true;
	wallLeft.debug = true;


	// getting the camera to follow a player untill a certain limit
	camera.position.x = character.position.x;
	camera.position.y = character.position.y;
	if (camera.position.x <= 206) {
		camera.position.x = 206;
	}
	if (camera.position.y >= 300) {
		camera.position.y = 300;
	}

	// the player can only jump when touching the ground
	jumpAllow = true;
	for (var i = 0; i < platforms.length; i++) {
		platforms[i].debug = true;
		if (character.collide(ground) || character.collide(platforms[i])) {
			character.velocity.y = 0;
			jumpAllow = true;
		}
		for (let y = 0; y < enemies.length; y++) {
			if (enemies[y].collide(ground) || enemies[y].collide(platforms[i])) {
				enemies[y].velocity.y = 0;
			}
		}
	}

	// apply gravity
	character.velocity.x = 0;
	character.velocity.y += gravity;
	for (let i = 0; i < enemies.length; i++) {
		enemies[i].velocity.y += gravity;
	}

	//  commands
	if (keyIsDown(RIGHT_ARROW)) {
		character.velocity.x = 3;
	} else if (keyIsDown(LEFT_ARROW)) {
		character.velocity.x = -3;
	}
	if (keyWentDown(" ") && jumpAllow) {
		character.velocity.y = -jump;
	}

	if (keyWentDown("z")) {
		bullet = createSprite(character.position.x, character.position.y, 10, 10);
		bullets.add(bullet);
	}

	// bullets colisions and setup
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].velocity.x = 5;
		for (var k = 0; k < platforms.length; k++) {
			if (bullets[i].collide(platforms[k])) {
				bullets[i].remove();
				break
			}
		}
	}

}

// more flexible way of creating platforms
function createPlatform(_x, _y, _h, _w) {
	plat = createSprite(_x, _y, _h, _w);
	plat.addImage(platImg);
	plat.scale = 1;
	platforms.add(plat);
}
