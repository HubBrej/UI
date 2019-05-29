import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { User } from '../models/User.model'

@Component({
  selector: 'app-cmp-new-user',
  templateUrl: './cmp-new-user.component.html',
  styleUrls: ['./cmp-new-user.component.css']
})
export class CmpNewUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      login: '',
      password: '',
      name: '',
      firstname: '',
      groups : []
    });
}
onSubmitForm() {
  const formValue = this.userForm.value;
  const newUser = new User(
    formValue['login'],
    formValue['password'],
    formValue['name'],
    formValue['firstname'],
    formValue['groups']
  );
}

}
