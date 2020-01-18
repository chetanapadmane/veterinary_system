import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailsFormComponent } from './animal-details-form.component';

describe('AnimalDetailsFormComponent', () => {
  let component: AnimalDetailsFormComponent;
  let fixture: ComponentFixture<AnimalDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
