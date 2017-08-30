import { Component } from '@angular/core';
import { NotificationService } from '../../notifications/notification.service';

@Component({
  selector : 'settings',
  templateUrl : './settings.component.html'
})
export class SettingsComponent {


  constructor(private notificationSvc: NotificationService) { }

  showInfo(){
    this.notificationSvc.info('This is an info notification');
  }
  showSuccess(){
    this.notificationSvc.success('This is a success notification');
  }
  showWarning(){
    this.notificationSvc.warning('This is a warning notification');
  }
  showError(){
    this.notificationSvc.error('This is an error notification');
  }

}
