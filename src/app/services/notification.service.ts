import { Injectable  }    from '@angular/core';
//import { Observable } from 'rxjs';
//import { Subject } from 'rxjs/Subject';

import { Notification, NotificationType } from '../notifications/notification';

@Injectable()
export class NotificationService {
  //private subject = new Subject<any>();

  notifications: Array<Notification> = [];

  constructor() { }

  info(title: string): void {
    //this.subject.next({nt:1, title:title});
    this.notifications.push( new Notification(1, title) );
  }
  success(title: string): void{
    //this.subject.next({nt:2, title:title});
    this.notifications.push( new Notification(2, title) );
  }
  warning(title: string): void {
    //this.subject.next({nt:3, title:title});
    this.notifications.push( new Notification(3, title) );
    this.notifications.push( new Notification(3, title) );
    this.notifications.push( new Notification(3, title) );
  }
  error(title: string): void {
    //this.subject.next({nt:4, title:title});
    this.notifications.push( new Notification(4, title) );
    console.log('notification count is: '+this.notifications.length);
  }

  ack(id: number): void{
    this.notifications.pop();
  }
  //getNotifications(): Observable<any> {
  //  return this.subject.asObservable();
  //}

}
