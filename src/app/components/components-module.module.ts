import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnlacesInteresComponent } from './enlaces-interes/enlaces-interes.component';



@NgModule({
  declarations: [
    EnlacesInteresComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EnlacesInteresComponent
  ]
})
export class ComponentsModuleModule { }
