import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '';

  BorrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }
}
