import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperialBmiComponent } from './imperial-bmi.component';

describe('ImperialBmiComponent', () => {
  let component: ImperialBmiComponent;
  let fixture: ComponentFixture<ImperialBmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperialBmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperialBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
