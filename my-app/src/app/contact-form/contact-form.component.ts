import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './contact-form.component.css',
  template: `<div id="contato" class="tab">
  <p class="tab-title">CONTATO</p>
  <div class="tab-content" id="contato-div">
      <div id="contato-div" class="tab">
          <div id="div-txt-contato">
              <p id="txt-contato">FORMULÁRIO DE CONTATO</p>
          </div>
          <div id="div-contato">
              <form id="form_contato" [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                <label for="nome">Nome:&nbsp;</label>
                <input class="contato-class" type="text" name="nome" placeholder="   Digite seu nome aqui*" formControlName="nome" required>
                <div *ngIf="contactForm.get('nome')?.invalid && contactForm.get('nome')?.touched" class="validation-error">
                  <small>Campo obrigatorio!</small>
                </div>
                <label for="email">E-mail:&nbsp;</label>
                <input class="contato-class" type="email" name="email" placeholder="   Digite seu E-mail aqui*" formControlName="email" required>
                <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="validation-error">
                  <small>Campo obrigatorio!</small>
                </div>
                <label for="assunto">Assunto:&nbsp;</label>
                <input class="contato-class" type="text" name="assunto" placeholder="   Digite o tema do assunto*"  formControlName="assunto" required>
                <div *ngIf="contactForm.get('assunto')?.invalid && contactForm.get('assunto')?.touched" class="validation-error">
                  <small>Campo obrigatorio!</small>
                </div>
                <label for="descricao">Mensagem:&nbsp;</label>
                <textarea name="descricao" cols="30" rows="10" formControlName="descricao" placeholder="   Digite sua mensagem aqui*" formControlName="descricao" required></textarea>
                <div *ngIf="contactForm.get('descricao')?.invalid && contactForm.get('descricao')?.touched" class="validation-error">
                  <small>Campo obrigatorio!</small>
                </div>
                <button type="submit" id="button-contato">Enviar formulário</button>
              </form>
          </div>
      </div>
  </div>
</div>`
})
export class ContactFormComponent {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      assunto: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      return this.contactForm.markAllAsTouched();
    }
    console.log(`Fomrulario enviado com sucesso!`)
  }
}
