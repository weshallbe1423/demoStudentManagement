import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsComponent } from './parents/parents.component';
import { VipGuestComponent } from './vip-guest/vip-guest.component';


const routes: Routes = [
  
  {path:'parents',component:ParentsComponent},
  {path:'vip',component:VipGuestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestHouseRoutingModule { }
