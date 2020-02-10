import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestHouseRoutingModule } from './guest-house-routing.module';
import { ParentsComponent } from './parents/parents.component';
import { VipGuestComponent } from './vip-guest/vip-guest.component';


@NgModule({
  declarations: [ParentsComponent, VipGuestComponent],
  imports: [
    CommonModule,
    GuestHouseRoutingModule
  ]
})
export class GuestHouseModule { }
