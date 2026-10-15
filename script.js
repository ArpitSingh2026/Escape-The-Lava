const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const playerImage = new Image();
playerImage.src =  "3Character.png";

let player = {
    x: 26,  y: 170,
    width: 350, height: 150,
    dx : 0,
    dy: 0,
    speed: 15,
    gravity: 0.4,
    jumpPower: -10,
    grounded: false
};

    window.addEventListener('keydown', function (event){
    if (event.key === 'd'){
     player.dx = player.speed;
    }else if (event.key ==='a'){
     player.dx = -player.speed;
    }else if (event.key ==='w'){
     player.dy = player.jumpPower;
     player.grounded = false;
    }
    });

    window.addEventListener('keyup', function(event) {
        if (event.key === 'd' || event.key === 'a') {
            player.dx = 0;
        }
    })

function update() {
    player.x += player.dx;
    player.dy += player.gravity;
    player.y += player.dy;

    if(
    player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
    player.dy = 0;
    player.grounded = true;
    }

    blocks.forEach(block => {
        if (
            player.x < block.x + block.width &&
            player.x < player.width + block.x &&
            player.y < block.y + block.height &&
            player.y < player.height + block.y 
        ) {
            if (
                player.dy > 0 && (player.y + player.height - player.dy) <= block.y) {
                player.y = block.y - player.height;
                player.dy = 0;
                player.grounded = true;
            }
        }
    });
 }

function draw() {

    update();

   ctx.clearRect (0, 0, canvas.width, canvas.height);
   ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
    player.dy += 0.4    
    player.y += player.dy;
   blocks.forEach(block => { 
    ctx.fillStyle = "brown";
   ctx.fillRect(block.x, block.y, block.width, block.height); 
    
});

 ctx.fillStyle ="gold";
ctx.fillRect(winGate.x, winGate.y, winGate.width, winGate.height);
   requestAnimationFrame(draw);
}

   playerImage.onload = function () {
    draw();
   };

let blocks = [
     {
     x: 20, 
     y: 320,
     width: 60,
     height: 10
    },
    
    {
     x: 100,
     y: 260,
     width: 60,
     height:10
    },

    {
     x: 200, 
     y: 190,
     width: 60,
     height: 10
    },

    {
     x: 300, 
     y: 120,
     width: 60,
     height: 10
    },
];
    
let winGate = ({x: 350, y: 80, width: 20, height: 10}
);