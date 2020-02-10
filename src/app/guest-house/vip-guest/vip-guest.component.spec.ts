import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipGuestComponent } from './vip-guest.component';

describe('VipGuestComponent', () => {
  let component: VipGuestComponent;
  let fixture: ComponentFixture<VipGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
