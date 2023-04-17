import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CpCommonModule } from "./cp-common/cp-common.module";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CpCommonModule,
    ToastrModule.forRoot({
      timeOut: 30000,
      autoDismiss: true,
      positionClass: 'toast-top-center',
      closeButton: true,
      maxOpened: 1,
      enableHtml: true,
      tapToDismiss: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
