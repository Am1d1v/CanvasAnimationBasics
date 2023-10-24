

const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

console.log(canvas);
console.log(context);

window.addEventListener('resize',() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // context.fillStyle = 'white';
    // context.fillRect(10, 10, 150, 50);
})

const mouse = {
    x: null,
    y: null
}

canvas.addEventListener('click',(event) => {
    mouse.x = event.x;
    mouse.y = event.y;

});

canvas.addEventListener('mousemove',(event) => {
    mouse.x = event.x;
    mouse.y = event.y;

})



class Particle {
    constructor(){
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(){
        context.fillStyle = 'gray';
        context.strokeStyle = 'blue';
        context.lineWidth = 10;
        context.beginPath();
        context.arc(this.x, this.y, 50, 0, Math.PI * 2);
        context.stroke();
        context.fill();
    }
}

function init(){
    for(let i = 0; i < 100; i++){
        particlesArray.push(new Particle());
    }
}
init();
//console.log(particlesArray)

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate)
}
animate();
// context.fillStyle = 'white';
// context.fillRect(10, 10, 150, 50);

















