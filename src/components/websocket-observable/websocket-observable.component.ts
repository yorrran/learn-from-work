import { Component, OnInit, OnDestroy } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-websocket-observable',
  templateUrl: './websocket-observable.component.html',
  styleUrls: ['./websocket-observable.component.scss']
})
export class WebsocketObservableComponent implements OnInit, OnDestroy {
  connection$: WebSocketSubject<any>;

  constructor() {}

  ngOnInit() {
    if (typeof WebSocket === 'undefined') {
      console.log('web socket is not supported');
    } else {
      console.log('connect web socket');
      this.connection$ = webSocket({
        url: 'ws://localhost:8082/ws/asset',
        deserializer: msg => msg
      });
      this.connection$.subscribe(item => {
        console.log('item:', item);
      });
    }
  }

  handleWebsocket() {
    this.connection$.next('message from client');
  }

  ngOnDestroy(){
    this.connection$.complete();
  }
}
