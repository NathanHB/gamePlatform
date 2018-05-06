
function followCharacter(){
    camera.position.x = character.position.x;
    camera.position.y = character.position.y;
    if (camera.position.x <= 218) {
        camera.position.x = 218;
    }
    if (camera.position.y >= 350) {
        camera.position.y = 350;
    }
}
