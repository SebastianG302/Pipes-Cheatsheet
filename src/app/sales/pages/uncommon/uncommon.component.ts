import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styleUrls: ['./uncommon.component.css']
})
export class UncommonComponent {

  constructor(){}

  sex: string = 'F';

  sexMap = {
    'M': 'He',
    'F': 'She'
  }

  customersArray: string[] = ['María', 'Pedro', 'Juan', 'Fernando', 'Sebastian'];

  customers: number = 1;

  customersMap = {
    '=0': 'customers waiting',
    '=1': 'customer waiting',
    'other':'customers waiting'
  }

  changeSex(){
    this.sex === 'F' ? this.sex = 'M' : this.sex = 'F';
  }

  increase(){
    this.customers += 1;
  }

  decrease(){
    if(this.customers > 0)
      this.customers -= 1;
  }

  // Keyvalue pipe
  person = {
    name: 'Sebastian',
    age: 19,
    address: 'Ottawa, Canada'
  }
  

}
