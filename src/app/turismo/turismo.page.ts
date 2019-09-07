import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {

  sitios = [
    
  {
    nameSite: 'https://photo620x400.mnstatic.com/b6d94215a515acc76c683f26b8a4886c/beirut.jpg',
    lugar: 'Beirut',
    descripcion: 'Beirut es la capital de Líbano y es una ciudad con muchas facetas... ¡cada cual más interesante! Algunos barrios se asoman al paseo marítimo como Manara, Rouché ...'
  },

  {
    nameSite: 'https://photo620x400.mnstatic.com/4d397686e1011327e7bb39c5230daf13/rouche-sea-rock.jpg',
    lugar: 'Rouche Sea Rock',
    descripcion: 'Esta formación natural de Beirut son una serie de arcos conocidos como las Rocas de las Palomas. (Pigeons Rocks). Se pueden ver las Rocas directamente desde una parte de Corniche aunque te puedes acercar por uno de los tramos más bajos de los acantilados donde hay muchas entradas y cuevas.'
  },

  {
    nameSite: 'https://photo620x400.mnstatic.com/9844955aed57d02aec4ab2cb67e33635/sitio-arqueologico-de-al-bass.jpg',
    lugar: 'Sitio Arqueológico de Al Bass',
    descripcion: 'Bajo a la zona arqueológica, si tiene tiempo, puede ser alcanzado por un paseo de una media hora desde el centro de Tiro. Si se da prisa, puede pedir a uno de los taxis situados en la plaza principal, pero no esperes un buen precio'
  },

  {
    nameSite: 'https://photo620x400.mnstatic.com/2fe578538009dd2658d26a4f9b990410/frontera-israel_libano.jpg',
    lugar: 'Frontera Israel-Líbano',
    descripcion: 'Frontera siempre problemática desde el nacimiento del estado de Israel. Agravada con la invasión de Líbano por parte de Israel en la guerra civil de este país y ahora muy agravada con la presencia de Hezbollah en el sur de Líbano.'
  },

  {
    nameSite: 'https://photo620x400.mnstatic.com/c115616ed9b3f27ac26321fee4d29687/bcharre-en-el-valle-de-qadisha.jpg',
    lugar: 'Bcharre en el Valle de Qadisha',
    descripcion: 'La ciudad o pueblo de Bcharre es un lugar muy tranquilo desde el que puedes visitar el Valle de Qadisha y sus monasterios. Se trata de una zona donde habitan miles de maronitas, una escisión del cristianismo de hace siglos.Para llegar hasta aquí lo puedes hacer desde Trípoli, Byblos o Baalbek en service (furgoneta), taxi o autobús (la mejor opción y muy economica).'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
