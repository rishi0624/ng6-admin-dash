import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { AccountsCoreComponent } from './accounts-core/accounts-core.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsCoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }, 
      {
        path: 'register',
        component: RegistrationComponent,
      },
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
