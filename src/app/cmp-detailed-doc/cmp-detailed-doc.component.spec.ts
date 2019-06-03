import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDetailedDocComponent } from './cmp-detailed-doc.component';

describe('CmpDetailedDocComponent', () => {
  let component: CmpDetailedDocComponent;
  let fixture: ComponentFixture<CmpDetailedDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpDetailedDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDetailedDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
