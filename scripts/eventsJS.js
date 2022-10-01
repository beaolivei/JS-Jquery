// console.log('loaded js')

// const ball = document.querySelector('.ball')
// const basket = document.querySelector('.basket')
// const basketPosition = basket.getBoundingClientRect()
// const basketX = basketPosition.x

// const play = (event) => {
//     if(event.x > basketX){
//         console.log('SCORE!')
//     }
// }
// ball.addEventListener('drag', (e) => play(e))

$(document).ready(() => {
    const ball = $('.ball')
    const basket = $('.basket')
    const basketPosition = basket.position()
    
    const play = (event) => {
        const ballXPosition = event.originalEvent.x
        if(ballXPosition > basketPosition.left){
            console.log('SCORE!')
        }
    }

    ball.on('drag', (e) => play(e))

})