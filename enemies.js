
function setupEnemy(){
    enemies = new Group();
	for (let i = 1; i <= 1; i++) {
		enemy = createSprite(250 * i, 300, 20, 20);
		enemy.scale = 0.04;
		enemy.setCollider("rectangle", 0, -10, 700, 2000);
		enemy.addAnimation('enemyWalk', enemyWalk);
		enemy.addAnimation('enemyStand', enemyimg);
		enemy.addAnimation('shoot', shoot);
		enemies.add(enemy);
	}
}

function updateEnemy(i){
    for (let y = 0; y < enemies.length; y++) {
		// enemies[y].debug = true;
		enemies[y].changeAnimation('enemyStand');
        if (enemies[y].collide(ground) || enemies[y].collide(platforms[i])) {
            enemies[y].velocity.y = 0;
        }
    }
}

function enemyShoot(){
    for (let i = 0; i < enemies.length; i++) {
		nextShoot = 0;
		enemies[i].velocity.y += gravity;
		xe = enemies[i].position.x;
		ye = enemies[i].position.y;
		xc = character.position.x;
		yc = character.position.y;
		if (distance(xe, xc, ye, yc) < 300 && second() > nextFire){
			nextFire = second() + shootRate;
			angl = Math.atan2(yc-ye, xc-xe);
			console.log(angl);
			enemies[i].velocity.x = 0;
			createBullet(xe-22, ye-12, 10, 10, 10, angl, false);
			enemy.changeAnimation('shoot')
			// gunsound.play();
		}
	}
}

function distance(_x, _x1, _y, _y1){
	dx = Math.abs(_x-_x1);
	dy = Math.abs(_y-_y1);
	d = Math.sqrt(Math.pow(dx, 2)+Math.pow(dy, 2));
	return d;
}