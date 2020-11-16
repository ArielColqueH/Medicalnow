import { Injectable } from "@angular/core";
import { DatosMedicos } from "src/app/models/datos-medicos";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class DatosMedicosService {
  constructor(private _http: HttpClient) {}

  registerMedicalData(datos: DatosMedicos): Observable<any> {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/user/medical_data/update/` +
        localStorage.getItem("userId"),
      datos,
      {
        headers: reqHeader,
      }
    );
  }
}
