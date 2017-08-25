import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Equipment } from './equipment';
import { EquipmentService } from './equipment.service';

@Component({
  selector : 'search',
  templateUrl : './search.component.html'
})
export class SearchComponent {

  environments: Array<object> = [
    {name: 'NW',value: 'NW'},
    {name: 'NE',value: 'NE'}
  ];

  types: Array<object> = [
    {name: 'Cisco',value: 'CSCO'},
    {name: 'HP',value: 'HP'}
  ];

  categories: Array<object> = [
    {name: 'Basic Commands',value: 'BASIC'},
    {name: 'Call Features',value: 'CFEATURES'}
  ];


  equipments: Array<Equipment> = [];

  envSelector = new FormControl('', Validators.required);

  selected_env: string;
  selected_type: string;
  selected_code: string;

  search(): void {
    this.equipments = [
      {id: 1, model:"abc", color:"blue"},
      {id: 2, model:"xyz", color:"yellow"},
      {id: 3, model:"123", color:"green"},
      {id: 4, model:"9000", color:"red"},
      {id: 5, model:"50.1", color:"white"},
    ];
  }

  reset(): void {
    this.selected_env = '';
    this.selected_type = '';
    this.selected_code = '';
    this.equipments.length = 0;
  }


}
