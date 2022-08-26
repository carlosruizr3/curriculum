import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEducationComponent } from './create-education.component';

const routes: Routes = [
  {
    path:'',component: CreateEducationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEducationRoutingModule { }
