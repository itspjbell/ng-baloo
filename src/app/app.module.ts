import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'demo', component: DemoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
