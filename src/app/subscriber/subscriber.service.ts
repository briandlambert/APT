import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subscriber } from './subscriber';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubscriberService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private subscriberUrl = 'api/subscribers';  // URL to web api
  subscribers: Array<Subscriber> = [];

  constructor(private http: Http) { }

  getRecent(): void{
    this.subscribers = [
      {"SubscriberId":"59","Name":"ZIPPY THE SQUIRREL","TelephoneNumber":"8005551212","TimeAccessed":"\/Date(1503930240020)\/"},
      {"SubscriberId":"21","Name":"HOMER","TelephoneNumber":"","TimeAccessed":"\/Date(1503928472650)\/"},
      {"SubscriberId":"22","Name":"ROMULUS","TelephoneNumber":"8005551212","TimeAccessed":"\/Date(1503688138640)\/"},
      {"SubscriberId":"61","Name":"PIG LATIN","TelephoneNumber":"8005551212","TimeAccessed":"\/Date(1503683264510)\/"},
    ];
  }

  getSubscribers(): Promise<Subscriber[]> {
    return this.http.get(this.subscriberUrl)
               .toPromise()
               .then(response => response.json().data as Subscriber[])
               .catch(this.handleError);
  }

  getSubscriber(usi: number): Promise<Subscriber> {
    const url = `${this.subscriberUrl}/${usi}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Subscriber)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
