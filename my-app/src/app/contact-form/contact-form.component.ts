import { Component} from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contact_forme = new FormGroup({
    nome: new FormControl(' ', [Validators.required]),
    email: new FormControl(' ', [Validators.required]),
    assunto: new FormControl(' ', [Validators.required]),
    descricao: new FormControl(' ', [Validators.required])
  });
  get nome() { return this.contact_forme.get('nome'); }
  get email() { return this.contact_forme.get('email'); }
  get assunto() { return this.contact_forme.get('assunto'); }
  get descricao() { return this.contact_forme.get('descricao'); }
}