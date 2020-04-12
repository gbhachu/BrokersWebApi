import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client-policies',
  templateUrl: './client-policies.component.html',
  styles: [
  ]
})
export class ClientPoliciesComponent implements OnInit {

  constructor(public service: ClientService) { }

  ngOnInit(): void {
  }

}
