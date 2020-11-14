import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NotificationModel } from 'src/app/models/notification.modele';

@Component({
  selector: 'app-notification-info',
  templateUrl: './notification-info.component.html',
  styleUrls: ['./notification-info.component.css'],
})
export class NotificationInfoComponent implements OnInit {
  @Input('viewNotification') selectedNotification: NotificationModel;
  @ViewChild('description', { static: true }) description: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    this.description.nativeElement.innerHTML = this.selectedNotification.description;
  }
}
