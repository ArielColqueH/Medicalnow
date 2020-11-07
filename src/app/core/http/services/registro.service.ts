import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private  _http: HttpClient) { }


  public conexionBackend(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8008/api/v1/patient/registry",user);
  }
}
