import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent { }
