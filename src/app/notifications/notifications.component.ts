
import { Component } from '@angular/core';
import { Notification, NotificationType } from './notification';
import { NotificationService } from '../services/notification.service';
import { Subscription } from 'rxjs/Subscription';
import { NgClass } from '@angular/common';
import { NotificationComponent } from './notification.component';

@Component({
  selector : 'notifications',
  templateUrl : './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  notifications: Array<Notification> = [];

  constructor(private notificationService: NotificationService) {
    //Ref to the master list of notifications
    this.notifications = notificationService.notifications;
  }
}
