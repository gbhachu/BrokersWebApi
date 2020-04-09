import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  formData: Policy;
  readonly rootURL = 'http://localhost:49386/api';
  list : Policy[];

  constructor(private http: HttpClient) { }

  postPolicy() {
    return this.http.post(this.rootURL + '/PostPolicy', this.formData);
  }

  putPolicy(id) {
    return this.http.put(this.rootURL + '/PutPolicy/' + this.formData.PolicyId, this.formData);
  }

  deletePolicy(id) {
    return this.http.delete(this.rootURL+ '/DeletePolicy/' + id);
  }

  refreshList(id){
    return this.http.get(this.rootURL + '/Policies')
      .toPromise()
        .then(res => this.list = res as Policy[]);
  }
}



  

  



  