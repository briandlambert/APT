
import { Component, Pipe, PipeTransform, trigger, state, animate, transition, style, keyframes } from '@angular/core';
import { Notification, NotificationType } from './notification';
import { NotificationService } from '../services/notification.service';
import { Subscription } from 'rxjs/Subscription';

import { NgClass } from '@angular/common';

import { NotificationComponent } from './notification.component';

//@Pipe({
//    name: 'showNew'
//})
//export class ShowNewPipe implements PipeTransform {
//  transform(items: Array<any>, isNew:boolean): Array<any> {
//    return items.filter(item => item.isNew === isNew);
//  }
//}

@Component({
  selector : 'notifications',
  templateUrl : './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  /* animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(300, keyframes([
        style({ transform: 'translateX(-100%)', offset: 0}),
        style({ transform: 'translateX(15px)',  offset: 0.3}),
        style({ transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(300, keyframes([
        style({ transform: 'translateX(0)',     offset: 0}),
        style({ transform: 'translateX(-15px)', offset: 0.7}),
        style({ transform: 'translateX(100%)',  offset: 1.0})
      ]))
      ])
    ])
  ]*/
})
export class NotificationsComponent {
  notifications: Array<Notification> = [];
  staggeringNotifications: any[] = [];

  //notification: any;
  //subscription: Subscription;

  next: number = 0;
  doNext() {
    if(this.next < this.notifications.length) {
      this.staggeringNotifications.push(this.notifications[this.next++]);
    }
  }

  removeMe(i:number) {
    this.staggeringNotifications.splice(i, 1);
  }

  constructor(private notificationService: NotificationService) {

    //Ref to the master list of notifications
    this.notifications = notificationService.notifications;

    //this.notifications = [
    //  {id:1, nt:1, title:'Info'},
    //  {id:2, nt:2, title:'Success'},
    //  {id:3, nt:3, title:'Warning'},
    //  {id:4, nt:4, title:'Error'}
    //]
/*
    this.subscription = this.notificationService.getNotifications().subscribe(notification => {
      let n = new Notification(notification.nt, notification.title);
      this.notifications.push(n);
    });
*/
    //Ref to the master list of notifications
    this.notifications = notificationService.notifications;

    //this.subscription = this.notificationService.getNotifications().subscribe(notification => {
      //let n = new Notification(notification.nt, notification.title);
      //this.notifications.push(n);
  //    debugger;
    //});


  }

  //ngOnDestroy(){
  //  this.subscription.unsubscribe();
  //}

}
