import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CivilComponent } from './civil/civil.component';
import { ComputerComponent } from './computer/computer.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { InformationTechnologyComponent } from './information-technology/information-technology.component';
import { MechanicalComponent } from './mechanical/mechanical.component';


const routes: Routes = [
{path:'civil' ,component:CivilComponent},
{path:'computer' ,component:ComputerComponent},
{path:'electrical' ,component:ElectricalComponent},
{path:'it' ,component:InformationTechnologyComponent},
{path:'mechanical',component:MechanicalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
