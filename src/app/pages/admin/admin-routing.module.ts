import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
  },
  {
    path: 'list_experience', loadChildren: () => import('../forms/list-experience/list-experience.module').then(m => m.ListExperienceModule)
  },
  {
    path: 'list_about', loadChildren: () => import('../forms/list-about/list-about.module').then(m => m.ListAboutModule)
  },
  {
    path: 'list_education', loadChildren: () => import('../forms/list-education/list-education.module').then(m => m.ListEducationModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
