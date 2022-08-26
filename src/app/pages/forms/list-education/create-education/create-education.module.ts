import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEducationRoutingModule } from './create-education-routing.module';
import { CreateEducationComponent } from './create-education.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { ListEducationComponent } from '../list-education.component';
import { UpdateEducationComponent } from '../update-education/update-education.component';


@NgModule({
  declarations: [
    CreateEducationComponent,
    ListEducationComponent,
    UpdateEducationComponent,
  ],
  imports: [
    CommonModule,
    CreateEducationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateEducationModule { }
