import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientDetailComponent } from './client-details/client-detail/client-detail.component';
import { ClientDetailPolicyListComponent } from './client-details/client-detail-policy-list/client-detail-policy-list.component';
import { ClientDetailService } from './shared/client.service';
import { PolicyService } from './shared/policy.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientDetailComponent,
    ClientDetailPolicyListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientDetailService, PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
