

const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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

    drawCircle(mouse.x, mouse.y);
});

function drawCircle(x, y){
    context.fillStyle = 'gray';
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2);
    context.stroke();
    context.fill();
}

// context.fillStyle = 'white';
// context.fillRect(10, 10, 150, 50);

















