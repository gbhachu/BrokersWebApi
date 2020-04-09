import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientDetailComponent } from './client-details/client-detail/client-detail.component';
import { ClientDetailPolicyListComponent } from './client-details/client-detail-policy-list/client-detail-policy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientDetailComponent,
    ClientDetailPolicyListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
