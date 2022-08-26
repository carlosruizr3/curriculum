import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../../../services/user.service";


@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {

  public formW: FormGroup;

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.formW = this.formBuilder.group({
      area: ['', Validators.required],
      date: ['', Validators.required],
      business: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required]
    })
  }

  async registroExperiences () {
     const query : any = await this.userService.createExperiences(this.formW.value );
     console.log(query  )
   }

}
