import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsCoreComponent } from './accounts-core.component';

describe('AccountsCoreComponent', () => {
  let component: AccountsCoreComponent;
  let fixture: ComponentFixture<AccountsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
