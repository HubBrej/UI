import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-detailed-doc',
  templateUrl: './cmp-detailed-doc.component.html',
  styleUrls: ['./cmp-detailed-doc.component.css']
})
export class CmpDetailedDocComponent implements OnInit {
  @Input() requestDoc: Document
  constructor() { }

  ngOnInit() {
  }

}
