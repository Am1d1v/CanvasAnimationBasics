

const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0;

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

    // for (let i = 0; i < 10; i++) {
    //     particlesArray.push(new Particle());    
    // }

});

canvas.addEventListener('mousemove',(event) => {
    mouse.x = event.x;
    mouse.y = event.y;

    for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle());    
    }

})



class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';

    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2){
            this.size -= 0.1;
        }
    }

    draw(){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
}

// function init(){
//     for(let i = 0; i < 100; i++){
//         particlesArray.push(new Particle());
//     }
// }
// init();
//console.log(particlesArray)

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i, 1);
            console.log(particlesArray.length);
            i--;
        }
    }
}

function animate(){
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = `rgba(0, 0, 0, 0.02)`;
    context.fillRect(0, 0, canvas.width, canvas.height)
    handleParticles();
    requestAnimationFrame(animate)
    hue += 5;
}
animate();
// context.fillStyle = 'white';
// context.fillRect(10, 10, 150, 50);

















