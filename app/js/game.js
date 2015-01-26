var canvasWidth = 800,
    canvasHeight = 600,
    $canvas = $('#gameCanvas'),
    canvas = $canvas[0].getContext('2d'),
    FPS = 30,
    keysDown = {};

$('body').on('keydown', function(e) {
  keysDown[e.which] = true;
});

$('body').on('keyup', function(e) {
  keysDown[e.which] = false;
});

$canvas.attr('width', canvasWidth);
$canvas.attr('height', canvasHeight);

var image = new Image();
image.src = "../img/player.png";

var playerX = (canvasWidth/2) - (image.width/2),
    playerY = (canvasHeight/2) - (image.height/2);

setInterval(function() {
  update();
  draw();
}, 1000 / FPS);


function update() {
  if(keysDown[37]) {
    playerX -= 10;
  }
  if(keysDown[38]) {
    playerY -= 10;
  }
  if(keysDown[39]) {
    playerX += 10;
  }
  if(keysDown[40]) {
    playerY += 10;
  }

  playerX = clamp(playerX, 0, canvasWidth - image.width);
  playerY = clamp(playerY, 0, canvasHeight - image.height);
}

function clamp(x, min, max) {
  return x < min ? min : (x > max ? max : x);
}

function draw() {
  canvas.clearRect(0, 0, canvasWidth, canvasHeight);
  canvas.strokeRect(0, 0, canvasWidth, canvasHeight);
  canvas.drawImage(image, playerX, playerY);
}
