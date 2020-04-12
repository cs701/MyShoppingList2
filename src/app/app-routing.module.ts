import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router }  from '@angular/router';

import { RegistrationComponent }   from './registration/registration.component';
import { MainComponent }     from './main/main.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
