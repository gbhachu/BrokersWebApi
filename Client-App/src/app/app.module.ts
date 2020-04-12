import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientPoliciesComponent } from './client-policies/client-policies.component';
import { ClientPoliciesListComponent } from './client-policies/client-policies-list/client-policies-list.component';
import { ClientService } from './shared/client.service';
import { HttpClientModule } from '@angular/common/http';
import { PolicyService } from './shared/policy.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientPoliciesComponent,
    ClientPoliciesListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ClientService , PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
