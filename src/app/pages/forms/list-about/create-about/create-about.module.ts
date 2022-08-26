import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAboutRoutingModule } from './create-about-routing.module';
import { CreateAboutComponent } from './create-about.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { ListAboutComponent } from '../list-about.component';
import { UpdateAboutComponent } from '../update-about/update-about.component';


@NgModule({
  declarations: [
    ListAboutComponent,
    UpdateAboutComponent,
    CreateAboutComponent,
  ],
  imports: [
    CommonModule,
    CreateAboutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateAboutModule { }
