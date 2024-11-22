import { Component } from '@angular/core';

@Component({
  selector: 'app-select-type',
  standalone: true,
  imports: [],
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.css'
})
export class SelectTypeComponent {
closeForm() {
    const formElement = document.getElementById('cadastrar');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }
}
