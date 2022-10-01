console.log('loaded js')

// Vanilla JS approach
// const ball = document.querySelector('.ball')
// const basket = document.querySelector('.basket')
// const basketPosition = basket.getBoundingClientRect()
// const play = (event) => {
//     if(event.x > basketPosition.x){
//         console.log('SCORE!!!')
//     }
// }
// ball.addEventListener('drag', (e) => play(e))


// const input = document.querySelector('.input')
// const display = document.querySelector('.display')

// input.addEventListener('input', (event)=> display.innerHTML = event.target.value)

//Jquery
$(document).ready(() => {
console.log('ready')
const ball = $('.ball')
const basket = $('.basket')
const basketPosition = basket.position()
const play = (event) => {
    if(event.originalEvent.x > basketPosition.left){
        console.log('SCORE!!!')
    }
}
ball.on('drag', (e) => play(e))
$('.input').on('keydown', (e) => $('.display').append(e.target.value))
})

