import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-supplier',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './register-supplier.component.css',
  template: `<div class="form-popup" id="register-for">
  <form  class="form-container" [formGroup]="registerSupplier" (ngSubmit)="onSubmit()">
    <h1><img class="user-icon" src="/register.svg">Cadastrar Fornecedor<a ><img class="icon-close" src="/circle-close-multiple-svgrepo-com.svg" (click)="closeForm()" ></a></h1>
    <div>
      <label for="empresa"><b>Nome da Empresa:&nbsp;</b></label>
      <input type="text" placeholder="Nome da Empresa" name="empresa" formControlName="empresa" required>
      <div class="validation-error" *ngIf="registerSupplier.get('empresa')?.invalid && registerSupplier.get('empresa')?.touched">
        <small>Campo obrigatório!</small>
      </div>
      <label for="cnpj"><b>CNPJ:&nbsp;</b></label>
      <input type="text" placeholder="Enter CNPJ" name="cnpj" formControlName="cnpj" required>
      <div class="validation-error" *ngIf="registerSupplier.get('cnpj')?.invalid && registerSupplier.get('cnpj')?.touched">
        <small>Campo obrigatório!</small>
      </div>
    </div>
    <div>
      <label for="email"><b>Email:&nbsp;</b></label>
      <input type="text" placeholder="Enter Email" name="email" formControlName="email" required>
      <div class="validation-error" *ngIf="registerSupplier.get('email')?.invalid && registerSupplier.get('email')?.touched">
        <small>Campo obrigatório!</small>
      </div>
      <label for="especialidade"><b>Especialidade:&nbsp;</b></label>
      <input type="text" placeholder="Descreva sua esoecialidade" name="especialidade" formControlName="especialidade" required>
      <div class="validation-error" *ngIf="registerSupplier.get('atividade')?.invalid && registerSupplier.get('atividade')?.touched">
        <small>Campo obrigatório!</small>
      </div>
    </div>
    <div>
      <label for="psw"><b>Password:&nbsp;</b></label>
      <input type="password" placeholder="Enter Password" name="psw" formControlName="password" formControlName="password" required>
      <div class="validation-error" *ngIf="registerSupplier.get('password')?.invalid && registerSupplier.get('password')?.touched">
        <small>Campo obrigatório!</small>
      </div>
    </div>
    <button type="submit" class="btn">Cadastrar</button>
  </form>
</div>`
})
export class RegisterSupplierComponent {
  registerSupplier: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerSupplier = this.fb.group({
      empresa: ['', Validators.required],
      cnpj: ['', Validators.required],
      email: ['', Validators.required],
      especialidade: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerSupplier.invalid) {
      return this.registerSupplier.markAllAsTouched();
    }
    console.log(`Cliente Fornecedor cadastrado com sucesso!`);
  }
  closeForm() {
    const formElement = document.getElementById('register-for');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }
}
