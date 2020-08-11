import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }
  menuArray: Array<any> = [];
  ngOnInit(): void {
    /* this.menuArray = [
      {link: 'emp', title: 'employee componnent' },
      {link:'empdetail',title:'employeeDetail'},
      {link:'httpemployee',title:'httpemployee'},
      {link:'dummy',title:'dummy'},
      {link:'empreg',title:'Employee Registration'},
      {link:'empregapi',title:'Employee Registration API'},
      {link:'barchart',title:'barchart'},
      {link:'formsdemo',title:'FormsDemo'},
    ] */

    this.items = [
      {
          label: 'employee',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
    ];
  }


}
