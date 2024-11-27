import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecionamento para a rota inicial
  { path: 'home', component: HomeComponent }, // Rota para o HomeComponent
  { path: 'about', component: AboutComponent }, // Rota para o AboutComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot() registra as rotas principais
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
