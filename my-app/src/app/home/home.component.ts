import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { IntroductionComponent } from "../introduction/introduction.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { InfiniteCarouselComponent } from "../infinite-carousel/infinite-carousel.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { InfiniteCrouselParceirosComponent } from "../infinite-crousel-parceiros/infinite-crousel-parceiros.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterModule,  NavBarComponent, IntroductionComponent, CarouselComponent, InfiniteCarouselComponent, AboutUsComponent, InfiniteCrouselParceirosComponent, CertificatesComponent, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute ) {}
    ngOnInit() {
    const par =
    this.activatedRoute.snapshot.paramMap.get('home.component.html')
  }
}


