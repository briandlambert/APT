import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector : 'search',
  templateUrl : './search.component.html',
  styleUrls: ['./search.component.scss']
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

  selected_usi: string;
  selected_tn: string;
  selected_so: string;
  selected_env: string;
  selected_type: string;
  selected_code: string;
  isAdmin: boolean = true;

  constructor(private router:Router){}

  search(): void {
    this.router.navigate(['/details']);
  }

  reset(): void {
    this.selected_usi = '';
    this.selected_tn = '';
    this.selected_so = '';
    this.selected_env = '';
    this.selected_type = '';
    this.selected_code = '';
    this.isAdmin = !this.isAdmin;
  }


}
