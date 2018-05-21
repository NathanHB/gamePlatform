
function setupEnemy(){
	enemies = new Group();
	var numberOfEnemies = 4;
	for (let i = 1; i <= numberOfEnemies; i++) {
		enemy = createSprite(255 * i, 300, 20, 20);
		enemy.scale = 0.04;
		enemy.setCollider("rectangle", 0, -10, 700, 2000);
		enemy.addAnimation('enemyWalk', enemyWalk);
		enemy.addAnimation('enemyStand', enemyimg);
		enemy.addAnimation('shoot', shoot);
		enemy.w = 95;
		enemy.reverse = false;
		enemy.nextFire = 0;
		enemies.add(enemy);
	}
}

function updateEnemy(i){
    for (let y = 0; y < enemies.length; y++) {
		// enemies[y].debug = true;
		xe = enemies[y].position.x;
		ye = enemies[y].position.y;
		xc = character.position.x;
		yc = character.position.y;
		angl = Math.atan2(yc-ye, xc-xe);
		enemies[y].changeAnimation('enemyStand');
        if (enemies[y].collide(ground) || enemies[y].collide(platforms[i])) {
			enemies[y].velocity.y = 0;
			if(i==4){
				enemies[y].collidePLat4 = true;
			}
			else{
				enemies[y].collidePLat4 = false;
			}
		}

		if (enemies[y].collidePLat4){
			enemies[y].velocity.x = platVX;
		}
		else{
			enemies[y].velocity.x = 0;
		}


		if (enemies[y].w <= 0){
			enemies[y].remove();
			break;
		}

		enemyHealthBar(enemies[y].position.x, enemies[y].position.y, enemies[y].w);
		if (enemyHit){
			updateEnemyHealthBar(enemyNum);
			console.log("Hit"+ k);
		}
		enemyHit = false;

		if (angl>-1.5 && angl<1.5){
			enemies[y].mirrorX(-1);
			enemies[y].reverse = true;
		}
		else{
			enemies[y].mirrorX(1);
			enemies[y].reverse = false;
		}
    }
}

function enemyShoot(){
    for (let i = 0; i < enemies.length; i++) {
		enemies[i].velocity.y += gravity;
		xe = enemies[i].position.x;
		ye = enemies[i].position.y;
		xc = character.position.x;
		yc = character.position.y;

		if (distance(xe, xc, ye, yc) < 300 && second() > enemies[i].nextFire){
			enemies[i].nextFire = second() + shootRate;
			angl = Math.atan2(yc-ye, xc-xe);
			console.log(angl);
			enemies[i].velocity.x = 0;
			if (enemies[i].reverse){
				createBullet(xe+22, ye-12, 10, 10, 10, angl, false);
				enemies[i].changeAnimation('shoot');
				gunsound.play();
			}
			else{
				createBullet(xe-22, ye-12, 10, 10, 10, angl, false);
				enemies[i].changeAnimation('shoot');
				gunsound.play();
			}
		}
	}
}

function distance(_x, _x1, _y, _y1){
	dx = Math.abs(_x-_x1);
	dy = Math.abs(_y-_y1);
	d = Math.sqrt(Math.pow(dx, 2)+Math.pow(dy, 2));
	return d;
}
