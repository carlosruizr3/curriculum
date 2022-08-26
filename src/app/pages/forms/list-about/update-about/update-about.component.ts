import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../../services/user.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.css']
})
export class UpdateAboutComponent implements OnInit {

  public formUpdate = new FormGroup({
    birth: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')

  })


  constructor(private activeRouter: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.findOneAbout()
  }

  async findOneAbout() {
    let id = this.activeRouter.snapshot.paramMap.get('id')
    console.log(id)
    const query: any = await this.userService.findOneAbout(id);
    console.log(query.data)

    this.formUpdate.setValue({
      'birth': query.data.birth,
      'phone': query.data.phone,
      'email': query.data.email,
      'address': query.data.address
    })
  }

  get datos() {
    return this.formUpdate.controls;
  }

  async update(form: any) {
    let id = this.activeRouter.snapshot.paramMap.get('id')
    const query: any = await this.userService.updateAbouts(form, id);
    console.log(query);
  }
}
