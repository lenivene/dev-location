import socketio from "socket.io-client";

const socket = socketio("http://192.168.2.170:3333", {
  autoConnect: false
});

function subscribeToNewDevs(callback) {
  socket.on("new", callback);
}

function connect(options) {
  socket.io.opts.query = options;
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { subscribeToNewDevs, connect, disconnect };
