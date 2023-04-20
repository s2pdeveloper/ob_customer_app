import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor(private jwtService: JwtService) { }

  connect() {
    const token = this.jwtService.getToken();
    this.socket = io(environment.url, { auth: { token } })
    this.socket.on('connect', () => {
      console.log('Socket connected successfully')
    })
  }
  disconnect() {
    this.socket.on('disconnect', () => {
      console.log('Socket disconnect successfully')
    })
  }

  emitEvent(event: string, payload: any) {
    console.log('Event emitted', event);
    this.socket.emit(event, payload);
  }

  listenEvent(event: string) {
    let observable = new Observable(observer => {
      //listen the event
      console.log('Event listen', event);
      this.socket.on(event, (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });
    return observable;
  }


  removeListeners(event: string) {
    let observable = new Observable(observer => {
      console.log('Removing listener', event);
      this.socket.off(event, (data) => {
        console.log('response', data)
      });
      return () => { this.socket.disconnect(); }
    });
    return observable;
  }
}
