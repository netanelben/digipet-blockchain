import io from 'socket.io-client';

const socket_url = ':4000';
const socket = io(socket_url);

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
