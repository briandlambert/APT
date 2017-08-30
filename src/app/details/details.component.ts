import { Component } from '@angular/core';
import { SubscriberService } from '../subscriber/subscriber.service';
import { ActivatedRoute, Params } from '@angular/router'; //To get param from URL?

@Component({
  selector : 'det',
  templateUrl : './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  subscriberId: string;

  constructor(private subscriberService: SubscriberService, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.subscriberId = params.SubscriberId;
    });
  }




}
