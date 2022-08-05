import { SecondComponentComponent } from './second-component/second-component.component';
import { FisrComponentComponent } from './fisr-component/fisr-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'first', component: FisrComponentComponent },
  { path: 'second', component: SecondComponentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
