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
    this.subscribers = [{"SubscriberId":"490000607759","Name":"JOHN DAVID BRAVO","TelephoneNumber":"2033898524","TimeAccessed":"\/Date(1503930240020)\/"},{"SubscriberId":"987654321","Name":"SMITH","TelephoneNumber":"","TimeAccessed":"\/Date(1503928472650)\/"},{"SubscriberId":"130001760822","Name":"KAREN VAUGHN","TelephoneNumber":"2604327042","TimeAccessed":"\/Date(1503688138640)\/"},{"SubscriberId":"370002824561","Name":"EDEN BAXTER","TelephoneNumber":"5036441380","TimeAccessed":"\/Date(1503683264510)\/"},{"SubscriberId":"370002764461","Name":"LISA KEMPER","TelephoneNumber":"5036253979","TimeAccessed":"\/Date(1503675842013)\/"},{"SubscriberId":"670008028616","Name":"FESTUS OKEKE","TelephoneNumber":"9724631087","TimeAccessed":"\/Date(1488547605200)\/"},{"SubscriberId":"370186593239","Name":"FWB SIMPLY RES","TelephoneNumber":"3603544349","TimeAccessed":"\/Date(1487793353277)\/"},{"SubscriberId":"570007082233","Name":"SHAUN MCGUIRE","TelephoneNumber":"9096288175","TimeAccessed":"\/Date(1487104401813)\/"}];
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
