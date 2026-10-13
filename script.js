const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const playerImage = new Image();
playerImage.src =  "My player.PNG";

let player = {
    x: 26,  y: 170,
    width: 90, height: 75,
    dx : 0,
    dy: 0,
    speed: 5,
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
    if (player.grounded)
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
        if (player.x < block.x + block.width && player.x + player.width > block.x &&
            player.y < block.y + block.height && player.y + player.height > block.y 
        ) {
            if (
                player.dy > 0 && (player.y + player.height - player.dy) <= block.y + 10) {
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
    ctx.strokeStyle = "gold"
    ctx.lineWidth = "3"
    ctx.strokeRect(3,3,canvas.width,canvas.height)
   ctx.fillRect(block.x, block.y, block.width, block.height); 
    winGateCheck();
});

 ctx.fillStyle ="grey";
ctx.fillRect(winGate.x, winGate.y, winGate.width, winGate.height);
   requestAnimationFrame(draw);
}

   playerImage.onload = function () {
    draw();
   };


let blocks = [
     {
     x: 50, 
     y: 479,
     width: 75,
     height: 50
    },
    
    {
     x: 210,
     y: 450,
     width: 75,
     height:50
    },

    {
     x: 120, 
     y: 321,
     width: 75,
     height: 50
    },

    {
     x: 300, 
     y: 270,
     width: 75,
     height: 50
    },

    {
     x: 420,
     y: 140,
     width: 75,
     height: 50
    },

    {
     x: 540,
     y: 270,
     width: 75,
     height: 50
    },

    {
     x: 710,
     y: 455,
     width: 75,
     height: 50
    },

    {
     x: 800,
     y: 340,
     width: 75,
     height: 50
    },

    {
     x: 960,
     y: 240,
     width: 75,
     height: 50
    },

    {
     x: 1080,
     y: 390,
     width: 75,
     height: 50
    },

    {
     x: 1250,
     y: 465,
     width: 85,
     height: 65
    }
];
    
let winGate = ({x: 1295, y: 393, width: 20, height: 10}
);

function winGateCheck() {
    if(
        player.x < winGate.x + winGate.width && player.x + player.width > winGate.x && player.y < winGate.y + winGate.height.x &&  player.y + player.height > winGate.y
    ) {
        window.location.href = "win.html";
    }
};