import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IEnlace } from '../components/enlaces-interes/enlaces-interes.component';

@Component({
  selector: 'app-primera-seccion',
  templateUrl: './primera-seccion.component.html',
  styleUrls: ['./primera-seccion.component.scss']
})
export class PrimeraSeccionComponent implements OnInit {
  enlaces:IEnlace[];
  form: FormGroup;
  mensaje: string = '';
  
  constructor() {
    this.enlaces =[
      {
        titulo: "Componentes & Templates",
        link: "https://angular.io/docs"
      },
      {
        titulo: "Forms for User Input",
        link:"https://angular.io/docs"
      },
      {
        titulo: "Observables & RxJS",
        link: "https://angular.io/docs"
      },
      {
        titulo: "NgModules",
        link: "https://angular.io/docs"
      },
      {
        titulo: "Dependency Injection",
        link: "link5"
      },
      {
        titulo: "Access Servers over HTTP",
        link: "link6"
      },
      {
        titulo: "Routing and Navigation",
        link: "link7"
      }
    ]
    this.form = new FormGroup({
      palabra: new FormControl("",Validators.required)});
    
  }


  ngOnInit() {
  }

  isPalindromo() {
    let str:string = this.form.get('palabra').value;
    str = str.toUpperCase();
    if(str.split('').reverse().join('') === str){
      this.mensaje = "Es Palíndromo";
    }
    else{
      this.mensaje = "No es Palíndromo";
    }
    console.log(this.mensaje);
  }


}
