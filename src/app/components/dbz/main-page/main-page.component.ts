import { Component, OnInit, Output } from '@angular/core';

// Interfaces
import { Personaje } from '../../../interfaces/personaje';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9000
    },
    {
      nombre: 'Vegeta',
      poder: 12000
    }
  ];

  public nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor() { }

  ngOnInit(): void {}

  

  public agregarNuevoPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
  }

  public cambiarNombre(e: any): void {
    console.log(e.target.value);
  }

}
