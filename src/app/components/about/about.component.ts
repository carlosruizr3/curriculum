import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public abouts: any;
  constructor(private activeRouter: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.findAbouts();
  }

  async findAbouts() {
    const query: any = await this.userService.findAboutAll();
    console.log(query.data)
    this.abouts = query.data;
  }
}