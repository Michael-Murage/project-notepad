//function to randomise color selection

function randomColor() {
  const letters = '456789abcde'
  let color = '#'
  for (let i=0; i<6; i++){
    color += letters[Math.floor(Math.random() * 12)]
  }
  return color;
}

export { randomColor }