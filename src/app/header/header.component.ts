import { Component } from '@angular/core';
import { SubscriberService } from '../subscriber/subscriber.service';
import { Subscriber } from '../subscriber/subscriber';

@Component({
  selector : 'header',
  templateUrl : './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private subscriberService: SubscriberService){
    subscriberService.getRecent();
  }

}
