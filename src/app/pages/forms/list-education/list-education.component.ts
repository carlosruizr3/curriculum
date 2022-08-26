import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-education',
  templateUrl: './list-education.component.html',
  styleUrls: ['./list-education.component.css']
})
export class ListEducationComponent implements OnInit {

  public educations: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.findEducations();
  }

  async findEducations() {
    const query: any = await this.userService.findEducationAll();
    console.log(query.data)
    this.educations = query.data;
  }

  async update(id: any) {
    console.log("ID", id)
    this.router.navigate(['admin/list_education/update_education', id]);
  }

  async eliminar(id: any) {
    const query: any = await this.userService.eliminarEducations(id);
    console.log(query);
  }
}