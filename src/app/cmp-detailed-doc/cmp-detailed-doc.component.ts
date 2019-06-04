import { Component, OnInit} from '@angular/core';
import { DocService } from '../services/doc.service';

@Component({
  selector: 'app-cmp-detailed-doc',
  templateUrl: './cmp-detailed-doc.component.html',
  styleUrls: ['./cmp-detailed-doc.component.css']
})
export class CmpDetailedDocComponent{
  constructor(private docService: DocService) {
   }

   modifierMeta(){
     let elem=document.getElementById("mod-box")
   }
}
