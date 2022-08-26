import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ListAboutComponent } from './list-about.component';

const routes: Routes = [
  {
    path:'', component: ListAboutComponent
  },
  {
    path:'create_about', canActivate:[AuthGuard], loadChildren: ()=> import ('./create-about/create-about.module').then(m => m.CreateAboutModule)
  },
  {
    path:'update_about/:id', canActivate:[AuthGuard], loadChildren: ()=> import ('../list-about/update-about/update-about.module').then(m => m.UpdateAboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAboutRoutingModule { }
