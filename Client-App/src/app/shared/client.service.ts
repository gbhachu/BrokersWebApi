import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  formData:Client
  readonly rootUrl = 'http://localhost:49386/api';

  constructor(private http: HttpClient) { }

  
  getClient(ClientId) {
    this.http.get(this.rootUrl + /Clients/ + 1)
  }
}
