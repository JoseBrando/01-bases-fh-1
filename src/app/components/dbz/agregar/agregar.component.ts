import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// Interfaces
import { Personaje } from '../../../interfaces/personaje';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

}
