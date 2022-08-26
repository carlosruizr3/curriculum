import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../../../services/user.service";

@Component({
  selector: 'app-create-about',
  templateUrl: './create-about.component.html',
  styleUrls: ['./create-about.component.css']
})
export class CreateAboutComponent implements OnInit {

  public formW: FormGroup;

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.formW = this.formBuilder.group({
      birth: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  async registroAbouts() {
    const query: any = await this.userService.createAbouts(this.formW.value);
    console.log(query)
  }

}
