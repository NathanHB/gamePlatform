
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
	
}