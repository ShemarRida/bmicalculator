import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-bmi',
  templateUrl: './metric-bmi.component.html',
  styleUrls: ['./metric-bmi.component.css']
})
export class MetricBmiComponent implements OnInit {

  weightKG: number;

  heightM: number;

  bmiMetric: number;

  constructor() { }

  ngOnInit(): void {
  }
  bodyMassMetric(): number{
    return this.bmiMetric = this.weightKG / (this.heightM = this.heightM);
  }

}
