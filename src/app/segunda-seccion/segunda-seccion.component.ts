import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-segunda-seccion',
  templateUrl: './segunda-seccion.component.html',
  styleUrls: ['./segunda-seccion.component.scss']
})
export class SegundaSeccionComponent implements OnInit {

  form: FormGroup;
  mensajeNumero:string = '';
  constructor() {
    this.form = new FormGroup({
      numero: new FormControl(null,Validators.required)});
   }

  ngOnInit() {
  }
  verificarNumero(){
    let s:number = this.form.get('numero').value;
    if(s>100 && s<200){
      if(s%3 == 0){
        this.mensajeNumero = "Está en el rango y es múltiplo de 3"
      }else{
        this.mensajeNumero = "Está en el rango y no es múltiplo de 3"
      }
    }else {
      if (s%3 == 0){
        this.mensajeNumero = "No está en el rango y es múltiplo de 3"
      }else{
        this.mensajeNumero = "No está en el rango y no es múltiplo de 3"
      }
    }
    console.log(this.mensajeNumero)
  }

}
