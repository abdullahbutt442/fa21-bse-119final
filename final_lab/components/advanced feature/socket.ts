import io from 'socket.io-client';

const socket = io('https://your-backend-server.com');

export const useSocket = (event: string, callback: (data: any) => void) => {
  socket.on(event, callback);

  return () => {
    socket.off(event);
  };
};
