import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { filter } from 'rxjs';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public cursos: any;
  public educacion: any;

  constructor(private activeRouter: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.findEducations1();
  }
  async findEducations1() {
    const query: any = await this.userService.findEducationAll();
    this.educacion = query.data.filter((item: any) => item.type == 1)
    this.cursos = query.data.filter((item: any) => item.type == 2)
    console.log(this.educacion)
    console.log(this.cursos)
  }
}
