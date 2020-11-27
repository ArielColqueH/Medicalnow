import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SpecialtyModel } from "src/app/models/specialty-model";
import { map } from "rxjs/operators";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class SpecialtiesService {
  constructor(private _http: HttpClient) {}
  //URL = "http://localhost:8008/api/v1/specialties";
  listaSpeciality() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(`${config.apiUrl}/specialties`, {
      headers: reqHeader,
    });
    // return this._http
    //   .get<any>(`${config.apiUrl}/specialties`)
    //   .pipe(map((data) => data.value));
  }
  listaSpecialityFree() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(`${config.apiUrl}/specialties/free`, {
      headers: reqHeader,
    });
    // return this._http
    //   .get<any>(`${config.apiUrl}/specialties`)
    //   .pipe(map((data) => data.value));
  }
}
