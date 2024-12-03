import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-cli',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './register-cli.component.css',
  template: `<div class="form-popup" id="register-cli">
  <form  class="form-container" [formGroup]="registerCliForm" (ngSubmit)="onSubmit()">
    <h1><img class="user-icon" src="/register.svg">Cadastrar Cliente <a ><img  class="icon-close" src="/circle-close-multiple-svgrepo-com.svg" (click)="closeForm()" ></a></h1>
    <div>
      <label for="empresa"><b>Nome da Empresa:&nbsp;</b></label>
      <input type="text" placeholder="Nome da Empresa" name="empresa" formControlName="empresa" required>
      <div class="validation-error" *ngIf="registerCliForm.get('empresa')?.invalid && registerCliForm.get('empresa')?.touched">
        <small>Campo obrigatório!</small>
      </div>
      <label for="cnpj"><b>CNPJ:&nbsp;</b></label>
      <input type="text" placeholder="Enter CNPJ" name="cnpj" formControlName="cnpj" required>
      <div class="validation-error" *ngIf="registerCliForm.get('cnpj')?.invalid && registerCliForm.get('cnpj')?.touched">
        <small>Campo obrigatório!</small>
      </div>
    </div>
    <div>
      <label for="email"><b>Email:&nbsp;</b></label>
      <input type="text" placeholder="Enter Email" name="email" formControlName="email" required>
      <div class="validation-error" *ngIf="registerCliForm.get('email')?.invalid && registerCliForm.get('email')?.touched">
        <small>Campo obrigatório!</small>
      </div>
      <label for="atividade"><b>Atividade:&nbsp;</b></label>
      <input type="text" placeholder="Descreva sua atividade" name="atividae" formControlName="atividade" required>
      <div class="validation-error" *ngIf="registerCliForm.get('atividade')?.invalid && registerCliForm.get('atividade')?.touched">
        <small>Campo obrigatório!</small>
      </div>
    </div>
    <div>
      <label for="psw"><b>Password:&nbsp;</b></label>
      <input type="password" placeholder="Enter Password" name="psw" formControlName="password" required>
      <div class="validation-error" *ngIf="registerCliForm.get('password')?.invalid && registerCliForm.get('password')?.touched">
        <small>Campo obrigatório!</small>
      </div>
    </div>
    <button type="submit" class="btn">Cadastrar</button>
  </form>
</div>`
})
export class RegisterCliComponent {
  registerCliForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerCliForm = this.fb.group({
      empresa: ['', Validators.required],
      cnpj: ['', Validators.required],
      email: ['', Validators.required],
      atividade: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.registerCliForm.invalid) {
      return this.registerCliForm.markAllAsTouched();
    }
    console.log(`Cliente cadastrado com sucesso!`);
  }
  closeForm() {
    const formElement = document.getElementById('register-cli');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }
}
