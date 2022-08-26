import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEducationComponent } from './update-education.component';

const routes: Routes = [
  {
    path:'',component: UpdateEducationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateEducationRoutingModule { }
