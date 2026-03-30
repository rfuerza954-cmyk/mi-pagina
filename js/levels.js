const levels = [
    { name: "Nivel 1", goal: 800 },
    { name: "Nivel 2", goal: 1400 },
    { name: "Nivel 3", goal: 2000 }
];

let currentLevel = 0;

class Boss {
    constructor() {
        this.x = 2200;
        this.y = 350;
        this.width = 80;
        this.height = 80;
        this.hp = 5;
    }

    draw(ctx) {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
