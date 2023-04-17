function rectangularCollision({rectangular1, rectangular2}) {
    
    return (rectangular1.attackBox.position.x + rectangular1.attackBox.width >= enemy.position.x && 
        rectangular1.attackBox.position.x <= rectangular2.position.x + enemy.width &&
        rectangular1.attackBox.position.y + rectangular1.attackBox.height >= enemy.position.y &&
        rectangular1.attackBox.position.y <= rectangular2.position.y + enemy.height);
};


function determineWinner({player, enemy, timerId}) {
    clearTimeout(timerId);
    document.querySelector('#displayText').style.display = 'flex';
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie';
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 1 wins';
    } else if (enemy.health > player.health) {
        document.querySelector('#displayText').innerHTML = 'Player 2 wins';
    }
}


let timer = 20;
let timerId;
function decreaseTimer() {
    
    if(timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000);
        timer--;
        document.querySelector('#timer').innerHTML = timer;
    }

    if (timer === 0) {
        determineWinner({player, enemy, timerId});
    }   
}