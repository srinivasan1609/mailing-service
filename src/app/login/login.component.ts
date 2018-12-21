import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup,FormControl,Validators} from '@angular/forms';
import{ MatDialog} from '@angular/material';
import{ForgotPassDialogComponent} from "../forgot-pass-dialog/forgot-pass-dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup : FormGroup;
  constructor(private router: Router,public forgotPassword : MatDialog) { }
  ngOnInit(){
    this.loginFormGroup = new FormGroup({
      email : new FormControl(),
      password : new FormControl(),
    });
  }
  onForgetClick(){
    const dialogRef = this.forgotPassword.open(ForgotPassDialogComponent, {
      width: '250px',
      data: {}
    });
  }
  getErrorMessage(){
    return this.loginFormGroup.hasError('email') ? "Enter a Valid Email id" : " ";
  }
 

  goDashboard(){
    this.router.navigate(['dashboard']);
  }

  

}
