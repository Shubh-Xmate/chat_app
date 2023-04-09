const socket = io()

socket.on('countUpdated', () => {
    console.log('Client: Count has been updated !!')
})

document.querySelector('#clickMe').addEventListener('click', () => {
    console.log("I'm clicked")
    socket.emit('increment', "I've been incremented")
})