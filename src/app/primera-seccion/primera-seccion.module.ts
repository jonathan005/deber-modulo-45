import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModuleModule } from '../components/components-module.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    ComponentsModuleModule
  ]
})
export class PrimeraSeccionModule { }
