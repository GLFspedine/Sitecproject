import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


export const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'nav-bar', component: NavBarComponent},
];

