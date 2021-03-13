import io from 'socket.io-client';
const socket = io('https://digipet-blockchain.herokuapp.com:4000');

export const subscribeTo = (type, callback) => {
  socket.on('channel', function(data){
    if (data.type === type) {
      callback(data.payload)
    }
  })
}

export const publish = (type, payload) => {
  socket.emit('channel', { type, payload })
}
