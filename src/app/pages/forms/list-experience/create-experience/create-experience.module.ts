import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExperienceRoutingModule } from './create-experience-routing.module';
import { CreateExperienceComponent } from './create-experience.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { ListExperienceComponent } from '../list-experience.component';
import { UpdateExperienceComponent } from '../update-experience/update-experience.component';


@NgModule({
  declarations: [
    ListExperienceComponent,
    UpdateExperienceComponent,
    CreateExperienceComponent,
  ],
  imports: [
    CommonModule,
    CreateExperienceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateExperienceModule { }
