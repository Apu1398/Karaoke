import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, public loginService: LoginService) {}

  ngOnInit(){}

  /**
   * @name logout()
   * @description If the user is logged in any view and logs out with the respective button to do so this method will
   * be called. It changes the valie of 'login' to false which indicates there's no one logged in and changes the
   * web link to '/login'.
   */
  logout() {
    console.log('LOGOUT');
    this.loginService.setLogin();
  }

  /**
   * @name onSubmit()
   * @argument {NgForm} form - A form argument which is filled with the user's email and password
   * @description When the button to login is clicked this method is called and it sets the actual user in the page which
   * is returned by the backend.
   */
  onSubmit(form: NgForm) {
    console.log(form.value.email);
    console.log(form.value.password);

    form.reset();
  }
}
