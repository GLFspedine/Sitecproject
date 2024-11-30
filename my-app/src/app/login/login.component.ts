import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  styleUrl: './login.component.css',
  template: `<div class="form-popup" id="login">
  <form  class="form-container">
    <h1><img class="user-icon" src="/user.svg">Login <a ><img class="icon-close" src="/circle-close-multiple-svgrepo-com.svg" (click)="closeForm()"></a></h1>

    <label for="email"><b>Email:</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password:</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit" class="btn" (click)="closeForm()">Login</button>
    <button  class="btn cancel" (click)="closeForm()" >Cadastrar</button>
  </form>
</div>`
})
export class LoginComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute ) {}
  ngOnInit() {
  const par =
  this.activatedRoute.snapshot.paramMap.get('login.component.html')
  }
  closeForm() {
    const formElement = document.getElementById('login');
    if (formElement) {
      formElement.style.display = 'none';
    }
  }
}


