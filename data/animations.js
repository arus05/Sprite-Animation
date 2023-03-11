import animationStates from "./animationStates.js"

const spriteWidth = 575;
const spriteHeight = 523;

const animations = animationStates.map((animationState, index) => {
  const numFrames = animationState.frames;
  let frames = [];
  const yPosition = index*spriteHeight;

  for(let i=0; i<numFrames; i++){
    let xPosition = i*spriteWidth;
    frames.push({x:xPosition, y:yPosition});
  }
  return(
    {
      name: animationState.name,
      frames: frames,
    }
  )
})

export default animations