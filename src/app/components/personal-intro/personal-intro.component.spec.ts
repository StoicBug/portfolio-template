import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalIntroComponent } from './personal-intro.component';

describe('PersonalIntroComponent', () => {
  let component: PersonalIntroComponent;
  let fixture: ComponentFixture<PersonalIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
