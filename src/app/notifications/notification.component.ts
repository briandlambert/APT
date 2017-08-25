
import { Component, Input } from '@angular/core';
import { Notification, NotificationType } from './notification';
import { NotificationService } from '../services/notification.service';
//import { Subscription } from 'rxjs/Subscription';

import { NgClass } from '@angular/common';



@Component({
  selector : 'notification',
  templateUrl : './notification.component.html',
  styleUrls: ['./notification.component.scss'],

})
export class NotificationComponent {
  @Input() not:Notification;
  constructor(private notificationService: NotificationService) {

  }

  close(){
    this.notificationService.ack(this.not.id);
  }

}
