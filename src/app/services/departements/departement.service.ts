import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private httpClient: HttpClient) { }
  private host = "http://localhost:8443/api/v1/"; 

  public getAllDepartements():Observable<any>{
    return this.httpClient.get(this.host  + "departements-web-rest");
  }
}
