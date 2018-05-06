
function setupBullet(){
	charbullets = new Group(); 
	enemybullets = new Group(); 
}

function charbulletCollision(){
    for (var i = 0; i < charbullets.length; i++) {
		charbullets[i].changeAnimation('shootgun');
		for (let k = 0; k < enemies.length; k++) {
			if (charbullets[i].collide(enemies[k])) {
				charbullets[i].remove();
				break
			}
			else{
				for (var y = 0; y < platforms.length; y++) {
					if (charbullets[i].collide(platforms[y])) {
						charbullets[i].remove();
						break
					}
					else if(distance(charbullets[i].position.x, character.position.x, charbullets[i].position.y, character.position.y)> 100){
						charbullets[i].remove();
						break
					}
				}
			}
		}
	}
}

function enemybulletCollision(){
    for (var i = 0; i < enemybullets.length; i++) {
		enemybullets[i].changeAnimation('shootgun');
		if (enemybullets[i].collide(character)) {
			loosehealth = true;
			enemybullets[i].remove();
			break
		}
		else{
			for (var y = 0; y < platforms.length; y++) {
				if (enemybullets[i].collide(platforms[y])) {
					enemybullets[i].remove();
					break
					}
				}
			}
		}
	}


// shoot Bullets
function createBullet(_x, _y, _w, _h, _vx, rotation, k) {
	bullet = createSprite(_x, _y, _w, _h);
	bullet.rotation = rotation*60;
	bullet.addSpeed(_vx, bullet.rotation);
	bullet.addAnimation('shootgun', bulletShootgun);
	if (k){
		charbullets.add(bullet);
	}
	else{
		enemybullets.add(bullet)
	}
	
}

function shootgun(_x, _y, _w, _h, _vx){
	createBullet(_x, _y, _w, _h, _vx, 0, true);
	createBullet(_x, _y, _w, _h, _vx, 0.05, true);
	createBullet(_x, _y, _w, _h, _vx, -0.05, true);
}
