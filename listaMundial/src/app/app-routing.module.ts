import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jugador } from './verJugadores/models';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
