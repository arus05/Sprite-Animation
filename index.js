//imports
import animations from "./data/animations.js";
import animationStates from "./data/animationStates.js";

//grab elements
const toggleBtn = document.getElementById("toggle-btn");
const animationSelector = document.getElementById("animations");

//Set event listeners
toggleBtn.addEventListener("click", toggleAnimation);
animationSelector.addEventListener("change", changeAnimation);

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
let frameX;
let frameY;
let staggerFrames = 8;
let gameFrame = 0;
let animationFrame; //store return value of request/cancelAnimationFrame

//current animation
let animation;
let animationFrames;
let numFrames;

function animate(animationName){
  if (gameFrame === 0){
    animation = animations.find(animation=>{
      return animation.name === animationName;
    })
    animationFrames = animation.frames;
    frameY = animationFrames[0].y;
    numFrames = animation.frames.length;
  }

  ctx.clearRect(0, 0, canvas.height, canvas.width);

  frameX = animationFrames[Math.floor(gameFrame/staggerFrames) % numFrames].x;

  ctx.drawImage(spriteSheet, frameX,
    frameY, spriteWidth, spriteHeight,
    0, 0, spriteWidth, spriteHeight);



  gameFrame++;
  animationFrame = requestAnimationFrame(animate);
}

//toggle animation
function toggleAnimation(){
  if(animationFrame){
    stopAnimation();
  }
  else{
    startAnimation(animationSelector.value);
  }
}

//clear screen
function stopAnimation(){
  animationFrame = cancelAnimationFrame(animationFrame);
  ctx.clearRect(0, 0,  canvas.width, canvas.height);
  gameFrame = 0;
}

//start animation
function startAnimation(animationName){
  animate(animationName);
}

function changeAnimation(){
  stopAnimation();
  startAnimation(animationSelector.value);
}