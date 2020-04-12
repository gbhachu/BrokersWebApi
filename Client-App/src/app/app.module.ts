import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientPoliciesComponent } from './client-policies/client-policies.component';
import { ClientPolicyListComponent } from './client-policies/client-policy-list/client-policy-list.component';
import { ClientService } from './shared/client.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientPoliciesComponent,
    ClientPolicyListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
