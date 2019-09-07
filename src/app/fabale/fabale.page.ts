import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-fabale',
  templateUrl: './fabale.page.html',
  styleUrls: ['./fabale.page.scss'],
})
export class FabalePage implements OnInit {
  
  name = 'fabale';

  usuario = {
    nombre: 'Pascuale',
    password: 1234,
    estado: false
  };

  usuario2 = [
    {
      nombre: 'Shakira Bosé',
      password: 4567,
      estado: true
    },
    {
      nombre: 'Germán Alarcón',
      password: 8910,
      estado: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
