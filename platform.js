
function setupPlatform(){
    platforms = new Group();
	for (var i = 0; i < 2; i++) {
		createPlatform(250+i*300, 380-i*60, 13, 200, platImg1);
	}
	for (var y = 0; y< 2; y++){
		createPlatform(1500+y*290, 500+y*40, 2, 100, platImg);
		
	}
	createPlatform(1000, 400, 2, 100, platImg);
	createPlatform(2100, 450, 2, 100, platImg);
	createPlatform(2400, 600, 2, 100, platImg);
}

// more flexible way of creating platforms
function createPlatform(_x, _y, offy, w, img) {
	plat = createSprite(_x, _y);
	plat.addImage(img);
	plat.scale = 1.2;
	plat.setCollider("rectangle", 0, offy, w, 24);
	platforms.add(plat);
}