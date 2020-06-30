import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(private http: HttpClient) { }
  _claim_id: string = '';
  documents={};
  getclaims() {
    return this.http.get("assets/claims.json");
  }
  getdocuments() {
    return this.http.get("assets/documents.json");
  }

}
