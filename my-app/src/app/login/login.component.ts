import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  styleUrl: './login.component.css',
  template: `<div routerLink="/login" class="form-popup" id="login">
  <form  class="form-container" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <h1><img class="user-icon" src="/user.svg">Login <a ><img class="icon-close" src="/circle-close-multiple-svgrepo-com.svg" (click)="closeForm()"></a></h1>
    <label for="email"><b>Email:&nbsp;</b></label>
    <input type="text" placeholder="Digite seu e-mail aqui*" name="email" formControlName="email" required>
    <div class="validation-error" *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
      <small>Campo obrigatorio!</small>
    </div>
    <label for="psw"><b>Password:&nbsp;</b></label>
    <input type="password" placeholder="Digite sua senha aqui*" name="psw" formControlName="password" required>
    <div class="validation-error" *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
      <small>Campo obrigatorio!</small>
    </div>
    <button type="submit" class="btn">Login</button>
    <button  class="btn cancel" (click)="handleButtonClick()" >Cadastrar</button>
  </form>
</div>`
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }
    console.log(`Fomrulario enviado com sucesso!`);
    this.closeForm();
  }

  handleButtonClick() {
    this.closeForm();
    this.openCadastrar();
  }
  closeForm() {
    const formElement = document.getElementById('login');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }

  openCadastrar() {
    const formElement = document.getElementById('cadastrar');
    if (formElement) {
      formElement.style.display = 'block';
    }
  }
}
