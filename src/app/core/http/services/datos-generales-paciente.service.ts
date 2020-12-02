import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class DatosGeneralesPacienteService {
  constructor(private _http: HttpClient) {}

  getDatosGenerales() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/user/medical_data/` + localStorage.getItem("userId"),
      {
        headers: reqHeader,
      }
    );
  }

  getDatosAlergias() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/user/` + localStorage.getItem("userId") + "/allergies",
      {
        headers: reqHeader,
      }
    );
  }

  getDatosPrevios() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/user/` + localStorage.getItem("userId") + "/background",
      {
        headers: reqHeader,
      }
    );
  }
}
