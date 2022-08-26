import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../../services/user.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {

  public formUpdate = new FormGroup({

    level: new FormControl(''),
    date: new FormControl(''),
    institution: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl('')

  })


  constructor(private activeRouter: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.findOneEducation()
  }

  async findOneEducation() {
    let id = this.activeRouter.snapshot.paramMap.get('id')
    console.log(id)
    const query: any = await this.userService.findOneEducation(id);
    console.log(query.data)

    this.formUpdate.setValue({
      'level': query.data.level,
      'date': query.data.date,
      'institution': query.data.institution,
      'description': query.data.description,
      'type': query.data.type
    })
  }

  get datos() {
    return this.formUpdate.controls;
  }

  async update(form: any) {
    let id = this.activeRouter.snapshot.paramMap.get('id')
    const query: any = await this.userService.updateEducations(form, id);
    console.log(query);
  }
}