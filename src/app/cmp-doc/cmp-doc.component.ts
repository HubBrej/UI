import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Document } from '../models/Doc.model'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cmp-doc',
  templateUrl: './cmp-doc.component.html',
  styleUrls: ['./cmp-doc.component.css']
})
export class CmpDocComponent implements OnInit {
  docForm: FormGroup;
  responseText: any;
  responseJson: any;
  name: string;
  author: string;
  date: Date;
  type: string;
  id: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService=AuthService) {
    this.name = '';
    this.author = '';
    this.type = '';
    this.id=''
  }

  ngOnInit() {
    this.initForm()
  }
  initForm() {
    this.docForm = this.formBuilder.group({
      name: '',
      author: '',
      date: '',
      type: '',
      id: ''
    });
  }
  onSubmitForm() {
    const formValue = this.docForm.value;
    const newDoc = new Document(
      formValue['name'],
      formValue['author'],
      formValue['date'],
      formValue['type'],
      formValue['id']
    );
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "http://127.0.0.1:5000/doc");
    oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    oReq.send(newUser.toJson());
    oReq.onreadystatechange = (() => {
      if (oReq.readyState === 4 && oReq.status === 200) {
        this.responseJson = JSON.parse(oReq.responseText)
        this.name=this.responseJson['name']
        this.author=this.responseJson['author']
        this.date=new Date(this.responseJson['date'])
        this.type=this.responseJson['type']
        this.id=this.responseJson['id']
      }
    })
  }
}
