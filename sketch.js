var character;
var ground;
var platforms;
var plat;
var wallLeft;
var jump = 7;
var gravity = 0.2;
var jumpAllow = false;
var charbullets;
var enemybullets;
var platforms;
var enemies;
var shootRate = 1;
var nextFire = 0;
var direction = 'L'
var loosehealth= false;
var enemydmg = 3;
var widthHealthBar = 450;
var chunckOfLife = widthHealthBar/enemydmg;
var gameover = false;
var clouds;
var enemyHit = false;

function preload(){
	charimg = loadAnimation("assets/WelkLeft/sprite_0.png")
	charWalk = loadAnimation("assets/WelkLeft/sprite_0.png", "assets/WelkLeft/sprite_6.png");
	enemyimg = loadAnimation("assets/WelkLeft/sprite_0.png")
	enemyWalk = loadAnimation("assets/WelkLeft/sprite_0.png", "assets/WelkLeft/sprite_6.png");
	shoot = loadAnimation("assets/Shoot/sprite_1.png", "assets/Shoot/sprite_2.png")
	platImg = loadImage("assets/platform_0.png");
	platImg1 = loadImage("assets/platform_1.png");
	bulletShootgun = loadAnimation("assets/shootgun/shootgun0.png", "assets/shootgun/shootgun2.png")
	shootgunsound = loadSound('assets/shootgunsound1.mp3');
	reload = loadSound("assets/shootgunreloadsound.mp3");
	gunsound = loadSound("assets/gunsound.mp3");
	dmg = loadSound("assets/dmgsound.mp3");
	cloud_0 = loadImage("assets/cloud_0.png");
	cloud_1 = loadImage("assets/cloud_1.png");
	cloud_2 =  loadImage("assets/cloud_2.png");
}
	

function setup() {
	createCanvas(1000, 600);
	backGround();
	setupBullet();
	setupPlatform();
	setupEnemy();
	setupCharacter();

	// setup for the ground
	ground = createSprite(0, height, 1600, 200);
	// ground.addImage(groundImg);
	// setup for the leftBound
	wallLeft = createSprite(-290, height / 2, 10, height);
	wallLeft.immovable = true;
}

function draw() {
	background(17, 96, 195);
	drawSprites();
	character.changeAnimation('stand');
	healthBar(widthHealthBar);
	if(!gameover){
		if (loosehealth){
			console.log('hit');
			// dmg.play();
			updateHealthBar();
		}
		loosehealth = false;

		if (widthHealthBar <= 0){
			gameover = true;
		}
		
		// getting the camera to follow the character
		followCharacter();
		
		// the player can only jump when touching the ground
		jumpAllow = false;
		for (var i = 0; i < platforms.length; i++) {
			// platforms[i].debug = true;
			updateChar(i);
			updateEnemy(i);
		}
	
		// apply gravity and apply rules to enemies
		character.velocity.x = 0;
		character.velocity.y += gravity;
		enemyShoot();
	
		//  commands for player
		commands();
	
		// bullets colisions and setup
		charbulletCollision();
		enemybulletCollision();
	}
	
	if(gameover){
		console.log('Game Over..');
		newGame();
	}
}