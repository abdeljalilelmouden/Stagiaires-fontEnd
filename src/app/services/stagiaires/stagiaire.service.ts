import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private host = "http://localhost:8443/api/v1/";
  constructor(private httpClient: HttpClient) { }

  public getAllStagiaires():Observable<any>{
    return this.httpClient.get(this.host  + "stagiaires-web-rest");
  }
}
