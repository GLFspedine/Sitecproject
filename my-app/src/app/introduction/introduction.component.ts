import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  openCadastrar() {
    const formElement = document.getElementById('cadastrar');
    if (formElement) {
      formElement.style.display = 'block';
    }
  }
}
