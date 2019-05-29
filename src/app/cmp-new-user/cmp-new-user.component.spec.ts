import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpNewUserComponent } from './cmp-new-user.component';

describe('CmpNewUserComponent', () => {
  let component: CmpNewUserComponent;
  let fixture: ComponentFixture<CmpNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
