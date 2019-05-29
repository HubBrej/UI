import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpAuthComponent } from './cmp-auth.component';

describe('CmpAuthComponent', () => {
  let component: CmpAuthComponent;
  let fixture: ComponentFixture<CmpAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
