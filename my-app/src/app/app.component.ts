import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SelectTypeComponent } from "./select-type/select-type.component";
import { RegisterSupplierComponent } from "./register-supplier/register-supplier.component";
import { RegisterCliComponent } from "./register-cli/register-cli.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, LoginComponent, SelectTypeComponent, RegisterSupplierComponent, RegisterCliComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';
}
