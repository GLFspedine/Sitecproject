import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCliComponent } from './register-cli.component';

describe('RegisterCliComponent', () => {
  let component: RegisterCliComponent;
  let fixture: ComponentFixture<RegisterCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
