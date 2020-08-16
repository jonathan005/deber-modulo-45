import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enlaces-interes',
  templateUrl: './enlaces-interes.component.html',
  styleUrls: ['./enlaces-interes.component.scss']
})
export class EnlacesInteresComponent implements OnInit {
  @Input('enlaces') enlaces:IEnlace[];
  @Output() propagar = new EventEmitter<string>();
  constructor() {
   }

  ngOnInit() {
  }
  onPropagar(mensaje) {
    this.propagar.emit(mensaje);
  }
}
export interface IEnlace{
  titulo:string;
  link:string;

}
