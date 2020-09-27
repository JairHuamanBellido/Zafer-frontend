import io from 'socket.io-client';
import { Notification } from '../../design-pattern/Notification/Model/Notification';
import { environment } from '../../environment/environment';

export class InviteNamespace {
  socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  constructor() {
    this.init();
  }

  init(): void {
    this.socket = io(`${environment.API_URL}/invite`, {
      transports: ['websocket', 'polling'],
    });
  }

  joinRoom(id: string): void {
    this.socket.emit('joinroom', id);
  }

  inviteOrganization(inviteOrganization: Notification): void {
    this.socket.emit('organization', inviteOrganization);
  }
}

export const RequestInvitationEvent = new InviteNamespace();
