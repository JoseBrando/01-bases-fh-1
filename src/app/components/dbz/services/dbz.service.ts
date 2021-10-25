import { Injectable } from "@angular/core";

// Interfaces
import { Personaje } from '../../../interfaces/personaje';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 9000
        },
        {
          nombre: 'Vegeta',
          poder: 12000
        }
      ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    public agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}