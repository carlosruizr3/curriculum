import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent implements OnInit {

  public formW: FormGroup;

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.formW = this.formBuilder.group({
      level: ['', Validators.required],
      date: ['', Validators.required],
      institution: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required]
    })
  }

  async registroEducations () {
     const query : any = await this.userService.createEducations(this.formW.value );
     console.log(query  )
   }
}
