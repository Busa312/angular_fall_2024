import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RameChildComponent } from './rame-child.component';

describe('RameChildComponent', () => {
  let component: RameChildComponent;
  let fixture: ComponentFixture<RameChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RameChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RameChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
