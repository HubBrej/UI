import { Component, OnInit, Input, Injectable } from '@angular/core';
import { DocService } from '../services/doc.service';
@Component({
  selector: 'app-cmp-detailed-doc',
  templateUrl: './cmp-detailed-doc.component.html',
  styleUrls: ['./cmp-detailed-doc.component.css']
})
@Injectable()
export class CmpDetailedDocComponent implements OnInit {
  constructor(private docService: DocService) { }

  ngOnInit() {
  }

}
