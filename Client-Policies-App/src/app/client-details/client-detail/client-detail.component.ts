import { PolicyService } from './../../shared/policy.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientDetailService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styles: []
})
export class ClientDetailComponent implements OnInit {

  constructor(private service: PolicyService, private service2: ClientDetailService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
      this.service2.formData = {
        ClientId: 0,
        ClientName: ' '
      }
      this.service.formData = {      
      PolicyId : 0,
      CustomerName : ' ',
      CustomerAddress : ' ',
      Premium : ' ',
      PolicyType : ' ',
      InsurerName : ' '
      }
  }  
}
