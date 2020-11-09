import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  listen(eventname: string) {
    return new Observable<any>((subscriber) => {
      this.socket.on(eventname, (data) => {
        if (!data) {
          subscriber.error('No Data Found');
        }
        subscriber.next(data);
        subscriber.complete();
      });
    });
  }

  emit(eventname: string, data: any) {
    this.socket.emit(eventname, data);
  }
}
