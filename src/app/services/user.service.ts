import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,   HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string

  constructor(public httpClient: HttpClient) {

    this.url = environment.apiUrl

  }
  //Users
  async signup(data: any) {
    const query = this.httpClient.post(this.url + '/login', data).toPromise();
    console.log(data)
    return query;
  }

  async createUser(user: any) {
    const query = this.httpClient.post(this.url + '/register', user).toPromise()
    console.log(user);
    return query;
  }

  async findUser() {
    const user = this.httpClient.get(this.url + '/find_user').toPromise();
    console.log(user);
    return user;
  }

  getToken() {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false;
    }
  }

  //Experiences

  async findExperienceAll() {
    const query = this.httpClient.get(this.url + '/find_experience').toPromise();
    console.log(query);
    return query;
  }

  async findOneExperience(id: any) {
    const query = this.httpClient.get(this.url + '/findone_experience/' + id).toPromise();
    console.log(query);
    return query;
  }

  async createExperiences(data: any) {
    const query = this.httpClient.post(this.url + '/create_experience', data).toPromise();
    console.log(query);
    return query;
  }

  async updateExperiences(data: any, id: any) {
    const query = this.httpClient.put(this.url + '/update_experience/' + id,data).toPromise();
    console.log(query)
    return query;
  }

  async eliminarExperiences(id: any) {
    const query = this.httpClient.delete(this.url + '/delete_experience/' + id).toPromise();
    console.log(query);
    return query;
  }

  //Abouts

  async findAboutAll() {
    const query = this.httpClient.get(this.url + '/find_about').toPromise();
    console.log(query);
    return query;
  }

  async findOneAbout(id: any) {
    const query = this.httpClient.get(this.url + '/findone_about/' + id).toPromise();
    console.log(query);
    return query;
  }

  async createAbouts(data: any) {
    const query = this.httpClient.post(this.url + '/create_about', data).toPromise();
    console.log(query);
    return query;
  }

  async updateAbouts(data: any, id: any) {
    const query = this.httpClient.put(this.url + '/update_about/' + id,data).toPromise();
    console.log(query)
    return query;
  }

  async eliminarAbouts(id: any) {
    const query = this.httpClient.delete(this.url + '/delete_about/' + id).toPromise();
    console.log(query);
    return query;
  }

  //Educations

  async findEducationAll() {
    const query = this.httpClient.get(this.url + '/find_education').toPromise();
    console.log(query);
    return query;
  }

  async findOneEducation(id: any) {
    const query = this.httpClient.get(this.url + '/findone_education/' + id).toPromise();
    console.log(query);
    return query;
  }

  async createEducations(data: any) {
    const query = this.httpClient.post(this.url + '/create_education', data).toPromise();
    console.log(query);
    return query;
  }

  async updateEducations(data: any, id: any) {
    const query = this.httpClient.put(this.url + '/update_education/' + id,data).toPromise();
    console.log(query)
    return query;
  }

  async eliminarEducations(id: any) {
    const query = this.httpClient.delete(this.url + '/delete_education/' + id).toPromise();
    console.log(query);
    return query;
  }

  checkAuth() {
    return true;
  }
}
