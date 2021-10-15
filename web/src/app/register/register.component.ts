import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  checked: boolean;

  constructor(private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.initForm();
  }
   
  onSubmit() {      
    if (this.userForm.value.roles) {
      this.userForm.value.roles = ["premium"]
    } else {
      this.userForm.value.roles = ["user"]
    }
   
    this.user = this.userForm.value;
    this.dataStorageService.sendRegisterInfo(this.user);
    this.router.navigate(['/login']);
    console.log(this.userForm.value)

    this.userForm.reset();
  }

  /**
  * @name initForm()
  * @description creates the user registration form
  */
   private initForm() {
    let username = '';
    let password = '';
    let email = '';
    let id = '';
    let roles = false;




    this.userForm = new FormGroup({
      username: new FormControl(username, Validators.required),
      password: new FormControl(password,Validators.required),
      id: new FormControl(id),
      roles: new FormControl(roles),
      email: new FormControl(email, Validators.required)
      
      
    });
  }
  

}
