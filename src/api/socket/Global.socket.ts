import io from 'socket.io-client';
import { environment } from '../../environment/environment';

export class GlobalNamespace {
  socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  constructor() {
    this.init();
  }

  init(): void {
    this.socket = io(`${environment.API_URL}/global`, {
      transports: ['websocket', 'polling'],
    });
  }

  joinPersonRoom(id: string): void {
    this.socket.emit('joinroom', id);
  }
}

export const GlobalListenerEvent = new GlobalNamespace();
