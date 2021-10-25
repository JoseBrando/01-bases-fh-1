import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { Personaje } from '../../../interfaces/personaje';




@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  @Input('data') personajes: Personaje[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
