import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  closeForm() {
    const formElement = document.getElementById('myForm');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }
}


