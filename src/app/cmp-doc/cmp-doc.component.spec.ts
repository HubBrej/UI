import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDocComponent } from './cmp-doc.component';

describe('CmpDocComponent', () => {
  let component: CmpDocComponent;
  let fixture: ComponentFixture<CmpDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
