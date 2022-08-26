import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExperienceComponent } from './create-experience.component';

const routes: Routes = [
  {
    path:'',component: CreateExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateExperienceRoutingModule { }
