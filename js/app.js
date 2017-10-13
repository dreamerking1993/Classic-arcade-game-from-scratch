var p=130;//original position of player on x-axis
var q=113;//original position of player on y-axis
var r,s;
var x = $("#myCanvas")[0];
ctx = x.getContext('2d');

//creating the background of the canvas
$('.can').append($('<ul class="deck"></ul>'))

for (var i=0; i<5; i++) {
  $('.can .deck').append($('<li class="card water-block"></li>')) //the water blocks at top
}

for (var j=0; j<15; j++) {
  $('.can .deck').append($('<li class="card stone-block"></li>')) //the stone blocks at the middle
}

for (var k=0; k<5; k++) {
  $('.can .deck').append($('<li class="card grass-block"></li>')) //the smaller grass blocks at the middle
}

for (var l=0; l<5; l++) {
  $('.can .deck').append($('<li class="card grass grass-block"></li>')) //the larger grass blocks at the bottom
}


//creating enemy-bug1
var z = -50;
var dz = 1;
function animate1() {
  requestAnimationFrame(animate1);//creates the animation effect
  ctx.clearRect(z-dz, 38, 40, 30);//clears the screen
  var pic = new Image();
  pic.src = "images/enemy-bug.png";
  var enemy1 = ctx.drawImage(pic,z,38,40,30);
  //var enemy2 = ctx.drawImage(pic,z,13,60,40);

  ctx.stroke();
  z += dz;
  
  if (z > 300) { //the bug enters from left after exiting from right
    z = -50;
  }
  

}
animate1();


//creating the player

function animate() {
  ctx.clearRect(r, s, 40, 40);
  var pic = new Image();
  pic.src = "images/char-horn-girl.png"; 
  pic.addEventListener('load',function(){ctx.drawImage(pic,p,q,40,40)}, false); 
}
window.addEventListener('load',animate, false);


//enabling the up, right, down, left keys

document.addEventListener('keyup', function(){
  switch (event.keyCode) {
    case 37: // Left
      moveLeft();
    break;

    case 38: // Up
      moveUp();
    break;

    case 39: // Right
      moveRight();
    break;

    case 40: // Down
      moveDown();
    break;
  }
}, false);

function moveLeft() {
  r=p;//noting the original position of player before updating it 
  s=q;//noting the original position of player before updating it 
  p=p-60;//changes player's position in the row at the diff of 60
  animate();
};

function moveRight() {
  r=p;//noting the original position of player before updating it 
  s=q;//noting the original position of player before updating it   
  p=p+60;//changes player's position in the row at the diff of 60
  animate();
};

function moveUp() {
  r=p;//noting the original position of player before updating it 
  s=q;//noting the original position of player before updating it   
  q=q-25;//changes player's position in column at the diff of 25
  animate();
};

function moveDown() {
  r=p;//noting the original position of player before updating it 
  s=q;//noting the original position of player before updating it   
  q=q+25;//changes player's position in column at the diff of 25
  animate();
};
