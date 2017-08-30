import { Injectable  }    from '@angular/core';
import { Notification, NotificationType } from './notification';

@Injectable()
export class NotificationService {

  //The one and only array of notifications
  notifications: Array<Notification> = [];

  info(title: string): void {
    this.notifications.push( new Notification(this.guid(), NotificationType.INFO, title) );
  }
  success(title: string): void{
    this.notifications.push( new Notification(this.guid(), NotificationType.SUCCESS, title) );
  }
  warning(title: string): void {
    this.notifications.push( new Notification(this.guid(), NotificationType.WARNING, title) );
  }
  error(title: string): void {
    this.notifications.push( new Notification(this.guid(), NotificationType.ERROR, title) );
  }

  guid():number{
    return new Date().getTime();
  }

  ack(id: number): void{
    this.notifications.filter( f => {
      if(f.id===id){
        f.isNew = false;
        return;
      }
    });
  }

}
