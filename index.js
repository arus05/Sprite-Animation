//imports
import animationStates from "./data/animationStates.js";

//Set event listeners
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", toggleAnimation);

//Sprite information
const spriteWidth = 575;
const spriteHeight = 523;

// Get Canvas
const canvas = document.getElementById("canvas");
canvas.height = 600;
canvas.width = 600;

// Get Context
const ctx = canvas.getContext("2d");

// Load Image
const spriteSheet = new Image();
spriteSheet.src = "spritesheet.png";

//animate the images
let frameX = 0;
let frameY = 4;
let staggerFrames = 5;
let gameFrame = 0;
let animationFrame;
function animate(){
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  ctx.drawImage(spriteSheet, frameX*spriteWidth, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  if(frameX < 6){
    if(gameFrame % staggerFrames === 0) frameX++;
  }
  else{
    frameX = 0; 
  }
  gameFrame++;
  animationFrame = requestAnimationFrame(animate);
}

function toggleAnimation(){
  if(animationFrame){
    console.log(animationFrame);
    stopAnimation();
  }
  else{
    console.log(animationFrame);
    startAnimation();
  }
}

//clear screen
function stopAnimation(){
  animationFrame = cancelAnimationFrame(animationFrame);
  ctx.clearRect(0, 0,  canvas.width, canvas.height)
}

//start animation
function startAnimation(){
  animate();
}
