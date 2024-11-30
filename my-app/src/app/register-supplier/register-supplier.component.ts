import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-supplier',
  standalone: true,
  imports: [],
  templateUrl: './register-supplier.component.html',
  styleUrl: './register-supplier.component.css'
})
export class RegisterSupplierComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute ) {}
    ngOnInit() {
    const par =
    this.activatedRoute.snapshot.paramMap.get('register-supplier.component.html')
      }
        closeForm() {
    const formElement = document.getElementById('register-supplier');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }
}
