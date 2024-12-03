import { ActivatedRoute } from '@angular/router';
import { RegisterCliComponent } from './../register-cli/register-cli.component';
import { RegisterSupplierComponent } from './../register-supplier/register-supplier.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-type',
  standalone: true,
  imports: [ RegisterCliComponent, RegisterSupplierComponent ],
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.css'
})
export class SelectTypeComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute ) {}
  ngOnInit() {
  const par =
  this.activatedRoute.snapshot.paramMap.get('select-type.component.html')
  }
  handleButtonClick() {
    this.closeForm();
    this.openRegisterCli();
  }
  handleButtonClick01() {
    this.closeForm();
    this.openRegisterSupplier();
  }

    closeForm() {
      const formElement = document.getElementById('cadastrar');
      if (formElement) {
        formElement.style.display = 'none';
      }
    }
  openRegisterSupplier() {
    const formElement02 = document.getElementById('register-for');
    if (formElement02) {
      formElement02.style.display = 'block';
    }
  }
  openRegisterCli() {
    const formElement01 = document.getElementById('register-cli');
        if (formElement01) {
          formElement01.style.display = 'block';
    }
  }
}

