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
    console.log(x + ' (x position)');
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
let imgA = document.getElementById('imgD');
let imgB = document.getElementById('imgE');
let imgC = document.getElementById('imgC');
let imgD = document.getElementById('imgD');
let imgE = document.getElementById('imgE');
let imgF = document.getElementById('imgF');



// 
function draw(context) {
    clear();
    // to repeat, reset the x (in the update)

    context.drawImage(imgA, x, y);
    context.drawImage(imgA, x+(imgA.width), y);


    context.drawImage(imgB, x+x, y);
    context.drawImage(imgB, x+(imgB.width)+x, y);

    // context.drawImage(imgC, x+x+x, y);
    // context.drawImage(imgC, x+(imgC.width)+x+x, y);

    // context.drawImage(imgD, x+x+x+x, y);
    // context.drawImage(imgD, x+(imgD.width)+x+x+x, y);

};

// clear everything before next redraw
function clear() {
    context.fillStyle = 'purple';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

// this is the render??
window.requestAnimationFrame(gameLoop);
