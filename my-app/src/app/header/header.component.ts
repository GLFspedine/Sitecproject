import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
[x: string]: any;

sobre: any;
  openForm() {
    const formElement = document.getElementById('myForm');
    if (formElement) {
      formElement.style.display = 'block';
    }
  }
}

