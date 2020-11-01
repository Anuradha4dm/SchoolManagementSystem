import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SchoolMangementSystem';

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.emit('ch', 'mg data');
  }
}
