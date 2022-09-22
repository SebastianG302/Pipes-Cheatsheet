import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styleUrls: ['./uncommon.component.css']
})
export class UncommonComponent {

  constructor(){}

  customers: string[] = ['Juan', 'David'];

  customersMap = {
    '=0': 'not customers waiting',
    '=1': '1 customer waiting',
    'other': this.customers.length + ' customers waiting'
  }
}
