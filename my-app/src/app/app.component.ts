import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { InfiniteCarouselComponent } from "./infinite-carousel/infinite-carousel.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavBarComponent, CarouselComponent, IntroductionComponent, InfiniteCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';
}
