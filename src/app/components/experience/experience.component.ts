import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { filter } from 'rxjs';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public practicas:any;
  public experiencias:any;

  constructor(private activeRouter: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.findExperiences1();
  }

  async findExperiences1() {
    const query: any = await this.userService.findExperienceAll();
    this.experiencias = query.data.filter((item:any) => item.type == 1)
    this.practicas = query.data.filter((item:any) => item.type == 2)
    console.log(this.experiencias)
    console.log(this.practicas)
  }
}
