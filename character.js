
function setupCharacter(){
    character = createSprite(20, 450, 25, 50);
	// character.addImage(charimg);
	character.scale = 0.04;
	character.setCollider("rectangle", 0, -10, 1000, 2000);
	character.addAnimation('walk', charWalk);
	character.addAnimation('stand', charimg);
	character.addAnimation('shoot', shoot);
}

function updateChar(i){
    if (character.collide(ground) || character.collide(platforms[i])) {
		if(i==4){
			collidePLat4 = true;
		}
		else{
			collidePLat4 = false;
		}
        character.velocity.y = 0;
        jumpAllow = true;
    }
}

function commands(){
    if (keyIsDown(RIGHT_ARROW)) {
		character.velocity.x = 5;
		character.changeAnimation('walk');
		character.mirrorX(-1);
		direction = 'R'
	} else if (keyIsDown(LEFT_ARROW)) {
		character.velocity.x = -5;
		character.changeAnimation('walk');
		character.mirrorX(1);
		direction = "L"
	}
	if (keyWentDown(UP_ARROW) && jumpAllow) {
		character.velocity.y = -jump;
	}
	if (collidePLat4){
		character.velocity.x += platVX
		console.log('nfjkd')
	}

	if (keyWentDown(" ")) {
		if(direction == 'R'){
			shootgun(character.position.x+22, character.position.y-12, 6, 6, 10);
		}
		else{
			shootgun(character.position.x-22, character.position.y-12, 6, 6, -10);
		}
		shootgunsound.setVolume(0.7);
		shootgunsound.play();
		character.changeAnimation('shoot');
	}
	if (keyWentDown("r")){
		reload.setVolume(1.5);
		reload.play();
	} 
}