import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enlaces-interes',
  templateUrl: './enlaces-interes.component.html',
  styleUrls: ['./enlaces-interes.component.scss']
})
export class EnlacesInteresComponent implements OnInit {
  @Input('enlaces') enlaces:IEnlace[];
  //enlaces:IEnlace[];
  constructor() {
  /*  this.enlaces =[
      {
        titulo: "TIULO",
        link: "link"
      },
      {
        titulo: "Titulo2",
        link:'link2'
      }
    ]*/
   }

  ngOnInit() {
  }

}
export interface IEnlace{
  titulo:string;
  link:string;

}
