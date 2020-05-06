import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imperial-bmi',
  templateUrl: './imperial-bmi.component.html',
  styleUrls: ['./imperial-bmi.component.css']
})
export class ImperialBmiComponent implements OnInit {

  weightLBs: number;

  heightINCH: number;

  bmiImperial: number;
  constructor() { }

  ngOnInit(): void {
  }
  bodyMassImperial(): number{
    return this.bmiImperial = (this.weightLBs * 703) / (this.heightINCH * this.heightINCH);
  }

}
