import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../../services/user.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {

  public formUpdate = new FormGroup({

    area: new FormControl(''),
    date: new FormControl(''),
    business: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl('')

  })


  constructor(private activeRouter: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.findOneExperience()
  }

  async findOneExperience() {
    let id = this.activeRouter.snapshot.paramMap.get('id')
    console.log(id)
    const query: any = await this.userService.findOneExperience(id);
    console.log(query.data)

    this.formUpdate.setValue({
      'area': query.data.area,
      'date': query.data.date,
      'business': query.data.business,
      'description': query.data.description,
      'type': query.data.type
    })
  }

  get datos() {
    return this.formUpdate.controls;
  }

  async update(form: any) {
    let id = this.activeRouter.snapshot.paramMap.get('id')
    const query: any = await this.userService.updateExperiences(form, id);
    console.log(query);
  }

}
