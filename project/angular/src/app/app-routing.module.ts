import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
// import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  // { path: '**', component: EmptyRouteComponent },
  { path: 'angular', loadChildren: () => import('./modules/dummy/dummy.module').then(m => m.DummyModule) },
  { path: 'bwce', loadChildren: () => import('./modules/bwce-capability/bwce-capability.module').then(m => m.BwceCapabilityModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
