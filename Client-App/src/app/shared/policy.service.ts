import { Injectable } from '@angular/core';
import { Policy } from './policy.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  readonly rootUrl = 'http://localhost:49386/api';
  list : Policy[];

  constructor(private http: HttpClient) { }

  getPolicyList(ClientId) {
    this.http.get(this.rootUrl + /Policies/ + 1)
      .toPromise()
      .then(res => res as Policy[]);
  }
}
