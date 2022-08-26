import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public experiences: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.findExperience();
  }

  async findExperience() {
    const query: any = await this.userService.findExperienceAll();
    this.experiences = query.data
  }

  async logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}