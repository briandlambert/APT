import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Equipment } from './equipment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EquipmentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private equipmentUrl = 'api/equipment';  // URL to web api

  constructor(private http: Http) { }

  searchEquipment(): Promise<Equipment[]> {
    return this.http.get(this.equipmentUrl)
               .toPromise()
               .then(response => response.json().data as Equipment[])
               .catch(this.handleError);
  }

  getEquipment(id: number): Promise<Equipment> {
    const url = `${this.equipmentUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Equipment)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
