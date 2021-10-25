import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  public heroes       : string[] = ['Spiderman', 'Ironman', 'Capitán América', 'Hulk'];
  public heroeBorrado : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public borrar(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
