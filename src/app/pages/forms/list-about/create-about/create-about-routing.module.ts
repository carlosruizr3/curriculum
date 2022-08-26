import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAboutComponent } from './create-about.component';

const routes: Routes = [
  {
    path:'',component: CreateAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAboutRoutingModule { }
