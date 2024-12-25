import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RameComponent } from './rame.component';

describe('RameComponent', () => {
  let component: RameComponent;
  let fixture: ComponentFixture<RameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
