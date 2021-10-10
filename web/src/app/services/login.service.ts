import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable()
export class LoginService {
  login = false;
  user:User;

  constructor() {

  }

  setUser(user: User) {
    this.user = user;
  }

  setLogin() {
      this.login = !this.login;
  }
}