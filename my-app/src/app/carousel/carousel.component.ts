import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slide=[
    {img:'./1.jpg'},
    {img:'./2.jpg'},
    {img:'./3.jpg'},
  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "infinite": true,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      }
    ]
  };
}
