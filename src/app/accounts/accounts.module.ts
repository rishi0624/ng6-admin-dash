import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'; 
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { AccountsCoreComponent } from './accounts-core/accounts-core.component';

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  declarations: [LoginComponent, RegistrationComponent, AccountsViewComponent, AccountsCoreComponent]
})
export class AccountsModule { }
