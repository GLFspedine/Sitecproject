import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { Routes } from '@angular/router';


export const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot() registra as rotas principais
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
