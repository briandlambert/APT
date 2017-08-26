
import { Pipe, PipeTransform } from '@angular/core';
import { Notification } from './notification';
@Pipe({
    name: 'notificationfilter',
    pure: false
})
export class NotificationFilter implements PipeTransform {
    transform(items: Notification[]): Notification[] {
        if (!items){ return items; }
        return items.filter(item => {return item.isNew});
    }
}
