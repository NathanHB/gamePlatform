function setupObjective(){
    objective = createSprite(2420, 555, 30, 30);
    
}

function getObjective(){
    text('End', 2420, 555);
    if( character.overlapPoint(2420, 555)){
        console.log('dcbhj');
        gameover = true;
    }
}