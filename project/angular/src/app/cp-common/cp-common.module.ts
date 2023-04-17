import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DescriptionPanelComponent } from './description-panel/description-panel.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    DescriptionPanelComponent,
    SpinnerComponent
  ],
  exports: [
    DescriptionPanelComponent,
    BreadcrumbsComponent,
    SpinnerComponent
  ],
    imports: [
      HttpClientModule,
      CommonModule,
      FormsModule
    ]
})
export class CpCommonModule { }
