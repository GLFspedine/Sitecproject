import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { InfiniteCarouselComponent } from "./infinite-carousel/infinite-carousel.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { InfiniteCrouselParceirosComponent } from "./infinite-crousel-parceiros/infinite-crousel-parceiros.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavBarComponent, CarouselComponent, IntroductionComponent, InfiniteCarouselComponent, AboutUsComponent, InfiniteCrouselParceirosComponent, CertificatesComponent, FooterComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';
}
