import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-about',
  templateUrl: './list-about.component.html',
  styleUrls: ['./list-about.component.css']
})
export class ListAboutComponent implements OnInit {

  public abouts: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.findAbouts();
  }


  async findAbouts() {
    const query: any = await this.userService.findAboutAll();
    console.log(query.data)
    this.abouts = query.data;
  }

  async update(id: any) {
    console.log("ID", id)
    this.router.navigate(['admin/list_about/update_about', id]);
  }

  async eliminar(id: any) {
    const query: any = await this.userService.eliminarAbouts(id);
    console.log(query);
  }

}
