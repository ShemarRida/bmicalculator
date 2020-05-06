import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricBmiComponent } from './metric-bmi/metric-bmi.component';
import { ImperialBmiComponent } from './imperial-bmi/imperial-bmi.component';


const routes: Routes = [
  {path: '', redirectTo: '/metricbmi', pathMatch: 'full'},
  {path: 'metricbmi', component: MetricBmiComponent},
  {path: 'imperialbmi', component:ImperialBmiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
