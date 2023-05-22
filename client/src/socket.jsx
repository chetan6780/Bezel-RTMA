import io from 'socket.io-client';
// const sockets = io('https://bezel-ui.netlify.app/', { autoConnect: true, forceNew: true });
// connect to the server
const sockets = io('/');
export default sockets;
