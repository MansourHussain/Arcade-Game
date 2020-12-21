

// Enemies our player must avoid
var Enemy = function(x, y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.s = s;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x +this.s * dt  + 4;
    if (this.x >= 500){
        this.x = 0;

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
enemy1 = new Enemy(200, 60, 40);
enemy2 = new Enemy(200, 150, 60);
enemy3 = new Enemy(200, 230, 52);
let allEnemies = [enemy1, enemy2, enemy3];
    
class Player {
    constructor(x, y){
        this.sprite = "images/char-boy.png";
        this.x = x;
        this.y = y;
    }
        update(){
    
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(keys){
        if(keys == 'up') {
            this.y -= 28;
            if (this.y <= 0) {
                this.y = 445;
            }
        }
        if(keys == 'down') {
            this.y += 28;
            if (this.y >= 445) {
                this.y = 445;
            }
        }
        if(keys == 'left') {
            this.x -= 100;
            if (this.x <= 0) {
                this.x = 0;
            }
        }
        if(keys == 'right') {
            this.x += 100;
            if (this.x >= 420) {
                this.x = 420;
            }
        }

    }
}
let player = new Player(200, 450);

let message = document.querySelector('.end');
function checkCollisions() {
    allEnemies.forEach(function (insect) {
        if (Math.abs(insect.x - player.x) < 40 && Math.abs(insect.y - player.y) < 40) {
            player.x = 200;
            player.y = 445;
        }
        if (player.y <= 28){
            message.showModal();
        }
    })
    
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
