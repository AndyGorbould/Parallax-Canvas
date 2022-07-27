let canvas = document.getElementById('canvas');
canvas.height = innerHeight;
canvas.width = innerWidth;
context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(0, 0, canvas.height, canvas.width);
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

function update() {
  x++;
  y++;
  w++;
  h++;
};

function draw(context) {
  let imgA = document.getElementById('imgA');
  ctx.drawImage(imgA, x, y);

  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'blue';
  context.fillRect(x, y, w, h);
};


// this is the render??
window.requestAnimationFrame(gameLoop);
