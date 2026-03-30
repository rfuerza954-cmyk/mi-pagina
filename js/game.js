const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

let gravity = 0.8;
let player = new Player();
let boss = new Boss();

let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function update() {
    player.velX = 0;

    if (keys["ArrowRight"]) player.velX = player.speed;
    if (keys["ArrowLeft"]) player.velX = -player.speed;

    if (keys[" "] && player.onGround) {
        player.velY = player.jumpPower;
        player.onGround = false;
    }

    player.update(gravity);

    // Cambio de nivel
    if (player.x > levels[currentLevel].goal) {
        currentLevel++;
        player.x = 50;

        if (currentLevel >= levels.length) {
            alert("¡Boss final!");
        }
    }

    // Boss fight
    if (currentLevel >= levels.length) {
        if (
            player.x < boss.x + boss.width &&
            player.x + player.width > boss.x &&
            player.y < boss.y + boss.height &&
            player.y + player.height > boss.y
        ) {
            boss.hp--;
            player.x = 50;

            if (boss.hp <= 0) {
                alert("¡Ganaste!");
                location.reload();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw(ctx);

    ctx.fillStyle = "green";
    ctx.fillRect(0, 380, 800, 20);

    ctx.fillStyle = "black";
    ctx.fillText(levels[currentLevel]?.name || "Boss", 10, 20);

    if (currentLevel >= levels.length) {
        boss.draw(ctx);
    }
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
