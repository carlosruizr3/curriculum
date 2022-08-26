import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ListExperienceComponent } from './list-experience.component';

const routes: Routes = [
  {
    path:'', component: ListExperienceComponent
  },
  {
    path:'create_experience', canActivate:[AuthGuard], loadChildren: ()=> import ('./create-experience/create-experience.module').then(m => m.CreateExperienceModule)
  },
  {
    path:'update_experience/:id', canActivate:[AuthGuard], loadChildren: ()=> import ('../list-experience/update-experience/update-experience.module').then(m => m.UpdateExperienceModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListExperienceRoutingModule { }
