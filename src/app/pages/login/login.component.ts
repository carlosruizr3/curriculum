import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder,) {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  async login() {
    const query: any = await this.userService.signup(this.formLogin.value);
    console.log(query)
    if (query.ok) {
      localStorage.setItem('token', query.token)
      this.router.navigateByUrl('/admin')
    }
  }
}
