import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-cli',
  standalone: true,
  imports: [],
  templateUrl: './register-cli.component.html',
  styleUrl: './register-cli.component.css'
})
export class RegisterCliComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute ) {}
    ngOnInit() {
    const par =
    this.activatedRoute.snapshot.paramMap.get('register-cli.component.html')
    }
    closeForm() {
      const formElement = document.getElementById('login');
      if (formElement) {
        formElement.style.display = 'none';
      }
    }
}
