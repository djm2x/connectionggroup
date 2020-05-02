import { User } from 'src/app/models/models';
import { SuperService } from './super.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AccountService extends SuperService<User> {

  constructor() {
    super('accounts');
  }

  register(o: User) {
    return this.http.post(`${this.urlApi}/${this.controller}/register`, o);
  }

  login(model) {
    return this.http.post(`${this.urlApi}/${this.controller}/login`, model);
  }

  sanctumCsrf() {
    return this.http.get(`${this.urlApi}/sanctum/csrf-cookie`);
  }

}
