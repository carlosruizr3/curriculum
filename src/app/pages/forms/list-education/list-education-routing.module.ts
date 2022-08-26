import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ListEducationComponent } from './list-education.component';

const routes: Routes = [
  {
    path:'', component: ListEducationComponent
  },
  {
    path:'create_education', canActivate:[AuthGuard], loadChildren: ()=> import ('./create-education/create-education.module').then(m => m.CreateEducationModule)
  },
  {
    path:'update_education/:id', canActivate:[AuthGuard], loadChildren: ()=> import ('../list-education/update-education/update-education.module').then(m => m.UpdateEducationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEducationRoutingModule { }
