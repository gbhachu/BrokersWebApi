import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailService {
  formData: Client;
  readonly rootURL = 'http://localhost:49386/api';
  list : Client[];

  constructor(private http: HttpClient) { }

  postClient() {
    return this.http.post(this.rootURL + '/PostClient', this.formData);
  }

  putClient() {
    return this.http.put(this.rootURL + '/PutClient/' + this.formData.ClientId, this.formData);
  }

  deleteClient(id) {
    return this.http.delete(this.rootURL+ '/DeleteClient/' + id);
  }

  getClient(id){
    return this.http.get(this.rootURL + '/GetClient/' + id);
  }

  refreshList(id){
    return this.http.get(this.rootURL + '/Clients')
      .toPromise()
        .then(res => this.list = res as Client[]);
  }
}
