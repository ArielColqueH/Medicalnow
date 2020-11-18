import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserDataModel } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class RegistroService {
  constructor(private _http: HttpClient) {}

  public conexionBackend(user: UserDataModel): Observable<any> {
    return this._http.post<any>(
      "http://localhost:8008/api/v1/user/patient/registry",
      user
    );
  }
}
