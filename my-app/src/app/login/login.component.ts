import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  styleUrl: './login.component.css',
  template: `<div routerLink="/login" class="form-popup" id="login">
  <form  class="form-container">
    <h1><img class="user-icon" src="/user.svg">Login <a ><img class="icon-close" src="/circle-close-multiple-svgrepo-com.svg" (click)="closeForm()"></a></h1>

    <label for="email"><b>Email:</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password:</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit" class="btn">Login</button>
    <button  class="btn cancel" >Cadastrar</button>
  </form>
</div>`
})
export class LoginComponent {
  closeForm() {
    const formElement = document.getElementById('login');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }
}


