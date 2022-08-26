import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAboutComponent } from './update-about.component';

const routes: Routes = [
  {
    path:'',component: UpdateAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAboutRoutingModule { }
