import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/User.model'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cmp-auth',
  templateUrl: './cmp-auth.component.html',
  styleUrls: ['./cmp-auth.component.css']
})
export class CmpAuthComponent implements OnInit {
  userForm: FormGroup;
  public isAuth: boolean;
  responseJson: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.initForm()
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      login: '',
      password: ''
    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['login'],
      formValue['password']
    );
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "http://127.0.0.1:5000/auth");
    oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    oReq.send(newUser.toJson());
    oReq.onreadystatechange = (() => {
      if (oReq.readyState === 4 && oReq.status === 200) {
        this.responseJson = JSON.parse(oReq.responseText)
        if (typeof (this.responseJson['token']) != "undefined") {
          this.authService.isAuth = true
        } else {
          this.authService.isAuth = false
        }
        this.router.navigate(['/doc']);
      }
    })
  }
}