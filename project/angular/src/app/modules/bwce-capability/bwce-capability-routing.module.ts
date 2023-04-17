import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CapabilityConfigurationComponent } from "./capability-configuration/capability-configuration.component";
import { CapabilityInfoComponent } from "./capability-info/capability-info.component";



const routes: Routes = [{
  path: 'capability',
  children: [
    {
      path: 'configuration',
      component: CapabilityConfigurationComponent
    },
    {
      path: 'instructions',
      component: CapabilityInfoComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BwceCapabilityRoutingModule { }
