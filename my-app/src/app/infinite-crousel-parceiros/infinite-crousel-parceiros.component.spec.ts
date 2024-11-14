import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteCrouselParceirosComponent } from './infinite-crousel-parceiros.component';

describe('InfiniteCrouselParceirosComponent', () => {
  let component: InfiniteCrouselParceirosComponent;
  let fixture: ComponentFixture<InfiniteCrouselParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteCrouselParceirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteCrouselParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
