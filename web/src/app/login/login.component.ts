import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private dataStorageService: DataStorageService
    ) {
    }

    ngOnInit() {
    }

    

    onSubmit(loginForm: NgForm) {  
      
      this.dataStorageService.sendLoginInfo(loginForm.value.username,loginForm.value.password).
      subscribe( user => {
        
          this.user = user;
            
            this.loginService.setUser(this.user);
            console.log(this.user);
            localStorage.setItem("token", this.user.accessToken);
            this.loginService.setLogin();
            this.router.navigate(['/gestion-canciones']);
          
      });
      
      
    
    }

}