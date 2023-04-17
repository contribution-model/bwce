import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BwceCapabilityRoutingModule } from "./bwce-capability-routing.module";
import { CapabilityConfigurationComponent } from './capability-configuration/capability-configuration.component';
import { CapabilityInfoComponent } from './capability-info/capability-info.component';
import { CpCommonModule } from "../../cp-common/cp-common.module";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    CapabilityConfigurationComponent,
    CapabilityInfoComponent
  ],
  imports: [
    CommonModule,
    BwceCapabilityRoutingModule,
    CpCommonModule,
    FormsModule
  ]
})
export class BwceCapabilityModule { }
