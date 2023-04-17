import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { DummyComponent } from "./dummy/dummy.component";
import { DummyChildComponent } from "./dummy-child/dummy-child.component";

const routes: Routes = [{
  path: '',
  component: DummyComponent,
  children: [
    {
      path: 'dummy',
      component: DummyChildComponent
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
export class DummyRoutingModule { }
