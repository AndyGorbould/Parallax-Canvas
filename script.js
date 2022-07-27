let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
context = canvas.getContext('2d');

// starting properties
let x = 0;
let y = 0;
let w = 0;
let h = 0;

// limit FPS ++
function gameLoop(time) {
    update();
    draw(context);
    window.requestAnimationFrame(gameLoop);
};


// this will scroll
function update() {
    x -= 10;
    if(x >= (canvas.width + canvas.width)) {
        x === 0;
        update();
    };
    //   y++;
    //   w++;
    //   h++;
};




// define images from html (already loaded before JS runs)
let imgA = document.getElementById('imgB');                     ////// NB this is swapped A/B
let imgB = document.getElementById('imgB');



// 
function draw(context) {
    clear();
    // to repeat, reset the x (in the update)
    context.drawImage(imgA, x, y);
    context.drawImage(imgA, x+(canvas.width), y);
    // context.drawImage(imgB, x, y);
    // context.drawImage(imgB, x+(imgB.width + 10), y);
    
};

// clear everything before next redraw
function clear() {
    context.fillStyle = 'red';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

// this is the render??
window.requestAnimationFrame(gameLoop);
