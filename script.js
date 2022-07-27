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
    console.log(x);
    x -= 2;
    if(x <= (0 - imgA.width)) {
        x = 0;
        // return;
    };
    //   y++;
    //   w++;
    //   h++;
};




// define images from html (already loaded before JS runs)
let imgA = document.getElementById('imgA');
let imgB = document.getElementById('imgB');
let imgC = document.getElementById('imgC');
let imgD = document.getElementById('imgD');



// 
function draw(context) {
    clear();
    // to repeat, reset the x (in the update)
    context.drawImage(imgA, x, y);
    context.drawImage(imgA, x+(imgA.width), y);


    context.drawImage(imgB, x+x, y);
    context.drawImage(imgB, x+(imgB.width), y);

    context.drawImage(imgC, x+x+x, y);
    context.drawImage(imgC, x+(imgC.width), y);

    context.drawImage(imgD, x+x+x+x, y);
    context.drawImage(imgD, x+(imgD.width), y);
    
};

// clear everything before next redraw
function clear() {
    context.fillStyle = 'red';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

// this is the render??
window.requestAnimationFrame(gameLoop);
