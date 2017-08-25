import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Equipment } from './equipment';

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

  /*
  delete(id: number): Promise<void> {
    const url = `${this.equipmentUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Equipment> {
    return this.http
      .post(this.equipmentUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Equipment)
      .catch(this.handleError);
  }

  update(equip: Equipment): Promise<Equipment> {
    const url = `${this.equipmentUrl}/${equip.id}`;
    return this.http
      .put(url, JSON.stringify(equip), {headers: this.headers})
      .toPromise()
      .then(() => equip)
      .catch(this.handleError);
  }
  */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
