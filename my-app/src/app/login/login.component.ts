import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
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


