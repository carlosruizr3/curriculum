import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateExperienceComponent } from './update-experience.component';

const routes: Routes = [
  {
    path:'',component: UpdateExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateExperienceRoutingModule { }
