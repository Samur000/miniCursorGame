const board = document.querySelector('#board')
const colors = ['#04FF00', '#00FFFF', '#2B62E7', '#D629EF', '#E99F1D', '#eb4034', '#e534eb', '#34d3eb']
const SQUARE_NUMBER = 899


for (let i = 0; i < SQUARE_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', setColor)
   square.addEventListener('mouseleave', removeColor)

   board.append(square)
}

function setColor(e) {
   const element = e.target
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
   const element = e.target
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}