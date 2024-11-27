import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  closeForm() {
    const formElement = document.getElementById('login');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }
}


