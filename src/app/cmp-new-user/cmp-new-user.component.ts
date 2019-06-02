import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/User.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmp-new-user',
  templateUrl: './cmp-new-user.component.html',
  styleUrls: ['./cmp-new-user.component.css']
})
export class CmpNewUserComponent implements OnInit {
  userForm: FormGroup;
  responseText: any;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      login: '',
      password: '',
      name: '',
      firstname: ''
    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['login'],
      formValue['password'],
      formValue['name'],
      formValue['firstname']
    );
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.reqListener);
    oReq.open("POST", "http://127.0.0.1:5000");
    oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    oReq.send(newUser.toJson());
    oReq.onreadystatechange = (() => { this.router.navigate(['']); this.responseText = oReq.responseText })
  }
  reqListener() {
    console.log(this.responseText)
  }
}
