import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-experience',
  templateUrl: './list-experience.component.html',
  styleUrls: ['./list-experience.component.css']
})
export class ListExperienceComponent implements OnInit {

  public experiences: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.findExperiences();
  }


  async findExperiences() {
    const query: any = await this.userService.findExperienceAll();
    console.log(query.data)
    this.experiences = query.data;

  }
  async update(id: any) {
    console.log("ID", id)
    this.router.navigate(['admin/list_experience/update_experience', id]);
  }

  async eliminar(id: any) {
    const query: any = await this.userService.eliminarExperiences(id);
    console.log(query);
  }

}
