import { Component } from '@angular/core';

@Component({
  selector: 'app-select-type',
  standalone: true,
  imports: [],
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.css'
})
export class SelectTypeComponent {

  handleButtonClick() {
    this.closeForm();
    this.openRegisterCli();
  }
  openRegisterCli() {
  const formElement01 = document.getElementById('register-cli');
      if (formElement01) {
        formElement01.style.display = 'block';
  }
}
    closeForm() {
      const formElement = document.getElementById('cadastrar');
      if (formElement) {
        formElement.style.display = 'none';
      }
    }
  }

