import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SelectTypeComponent } from './select-type/select-type.component';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';
import { RegisterCliComponent } from './register-cli/register-cli.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'select-type', component: SelectTypeComponent },
  { path: 'register-supplier', component: RegisterSupplierComponent },
  { path: 'register-cli', component: RegisterCliComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot() registra as rotas principais
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
