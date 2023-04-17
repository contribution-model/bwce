import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyRoutingModule } from './dummy-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { DummyChildComponent } from './dummy-child/dummy-child.component';



@NgModule({
  declarations: [
    DummyComponent,
    DummyChildComponent
  ],
  imports: [
    CommonModule,
    DummyRoutingModule
  ]
})
export class DummyModule { }
