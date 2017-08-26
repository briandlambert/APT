import { Injectable  }    from '@angular/core';
import { Notification, NotificationType } from '../notifications/notification';

@Injectable()
export class NotificationService {

  notifications: Array<Notification> = [];

  info(title: string): void {
    this.notifications.push( new Notification(this.guid(), 1, title) );
  }
  success(title: string): void{
    this.notifications.push( new Notification(this.guid(), 2, title) );
  }
  warning(title: string): void {
    this.notifications.push( new Notification(this.guid(), 3, title) );
  }
  error(title: string): void {
    this.notifications.push( new Notification(this.guid(), 4, title) );
    console.log('notification count is: '+this.notifications.length);
  }

  guid():number{
    return new Date().getTime();
  }

  ack(id: number): void{
    this.notifications.filter( f => {
      if(f.id===id)
        f.isNew = false;
    });
  }

}
