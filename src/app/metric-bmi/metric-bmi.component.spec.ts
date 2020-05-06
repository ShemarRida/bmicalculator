import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricBmiComponent } from './metric-bmi.component';

describe('MetricBmiComponent', () => {
  let component: MetricBmiComponent;
  let fixture: ComponentFixture<MetricBmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricBmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
