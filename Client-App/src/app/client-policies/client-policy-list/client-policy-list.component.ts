import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-client-policy-list',
  templateUrl: './client-policy-list.component.html',
  styles: []
})
export class ClientPolicyListComponent implements OnInit {

  constructor(private service:ClientService) { }

  ngOnInit(): void {
  }

}
