import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/shared/policy.service';

@Component({
  selector: 'app-client-policies-list',
  templateUrl: './client-policies-list.component.html',
  styles: [
  ]
})
export class ClientPoliciesListComponent implements OnInit {

  constructor(public service:PolicyService) { }

  ngOnInit(): void {
    this.service.list;
  }

}
