import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { InformationTechnologyComponent } from './information-technology/information-technology.component';
import { ComputerComponent } from './computer/computer.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { CivilComponent } from './civil/civil.component';


@NgModule({
  declarations: [InformationTechnologyComponent, ComputerComponent, ElectricalComponent, MechanicalComponent, CivilComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
