
function healthBar(_w){
    fill(255);
    rect(camera.position.x - 490, camera.position.y-285, 468, 25, 15);
    noStroke();
    fill(255, 0, 0)
    rect(camera.position.x - 480, camera.position.y-282, _w, 20, 15);
}

function updateHealthBar(){
    widthHealthBar -= chunckOfLife;
}

function newGame(){
	gameover = false;
	widthHealthBar = 450;
	charbullets.removeSprites();
	enemybullets.removeSprites();
	enemies.removeSprites();
	setupEnemy();
	character.position.x = 20;
	character.position.y = 450;
}

function enemyHealthBar(_x, _y, _w){
	fill(255);
	rect(_x - 45, _y - 70, 100, 10, 15);
	noStroke();
	fill(255, 0, 0);
	rect(_x - 43, _y - 69, _w, 8, 15);
}

function updateEnemyHealthBar(_k){
	// 95 = width of the original health bar
	enemies[_k].w -= 95/playerDmg;
 }

function backGround(){
	//  randmly generate clouds in the background
	clouds = new Group();
	for (var i = 0; i < 12; i++){
		cloud = createSprite(Math.random()*2600, Math.random()*500);
		k = Math.floor(Math.random()*3);
		switch(k){
			case 0:
				cloud.addImage(cloud_0);
				break;
			case 1:
				cloud.addImage(cloud_1);
				break;
			case 2:
				cloud.addImage(cloud_2);
				break;
		}
		clouds.add(cloud);
	}
}

function score(){
	text('SCORE: ' + points, camera.position.x - 480, camera.position.y-230);
}