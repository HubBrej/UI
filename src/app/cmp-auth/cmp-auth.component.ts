import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { User } from '../models/User.model'

@Component({
  selector: 'app-cmp-auth',
  templateUrl: './cmp-auth.component.html',
  styleUrls: ['./cmp-auth.component.css']
})
export class CmpAuthComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
}

}

