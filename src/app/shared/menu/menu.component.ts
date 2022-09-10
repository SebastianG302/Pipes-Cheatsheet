import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        style: {'margin-left': 'auto'},
        items: [
          {
            label: 'Text and dates',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'Uncommon',
            icon: ' pi pi-globe',
            routerLink: 'uncommon'
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: ' pi pi-cog',
      }
    ];
  }
}


