const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Successfully connected to the server');
})

socket.emit('chat', 'Hello world')