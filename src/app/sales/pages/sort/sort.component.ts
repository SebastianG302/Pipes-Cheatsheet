import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  capitalized: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  transform(){
    this.capitalized ? this.capitalized = false : this.capitalized = true;

  }

}
