import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute ) {}
    ngOnInit() {
    const par =
    this.activatedRoute.snapshot.paramMap.get('header.component.html')
  }

[x: string]: any;

sobre: any;
  openLogin() {
    const formElement = document.getElementById('login');
    if (formElement) {
      formElement.style.display = 'block';
    }
  }
  openCadastrar() {
    const formElement = document.getElementById('cadastrar');
    if (formElement) {
      formElement.style.display = 'block';
    }
  }
}


