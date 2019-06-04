import { Component } from '@angular/core';
import { DocService } from '../services/doc.service';

@Component({
  selector: 'app-cmp-detailed-doc',
  templateUrl: './cmp-detailed-doc.component.html',
  styleUrls: ['./cmp-detailed-doc.component.css']
})
export class CmpDetailedDocComponent {
  hideMM:boolean;
  

  constructor(private docService: DocService) {
    this.hideMM=false

  }
  show(val){
    console.log(val)
    this.hideMM=this.hideMM==val
  }
}