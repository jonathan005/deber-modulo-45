import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeraSeccionComponent } from './primera-seccion/primera-seccion.component';
import { SegundaSeccionComponent } from './segunda-seccion/segunda-seccion.component';
import { TerceraSeccionComponent } from './tercera-seccion/tercera-seccion.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CuartaSeccionComponent } from './cuarta-seccion/cuarta-seccion.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  { path: 'primera-seccion', component: PrimeraSeccionComponent },
  { path: 'segunda-seccion', component: SegundaSeccionComponent },
  { path: 'tercera-seccion', component: TerceraSeccionComponent },
  { path: 'cuarta-seccion', component: CuartaSeccionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PrimeraSeccionComponent, 
  SegundaSeccionComponent, 
  TerceraSeccionComponent,
  HomeComponent,
  CuartaSeccionComponent]
