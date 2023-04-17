import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageModalComponent } from './components/full-page-modal/full-page-modal.component';



@NgModule({
    declarations: [
        FullPageModalComponent
    ],
  exports: [
    FullPageModalComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SampleCommonModule { }
