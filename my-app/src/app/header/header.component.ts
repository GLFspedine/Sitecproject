import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  openForm() {
    const formElement = document.getElementById('myForm');
    if (formElement) {
      formElement.style.display = 'block';
    }
  }
}

