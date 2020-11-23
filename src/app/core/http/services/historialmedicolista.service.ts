import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class HistorialmedicolistaService {
  constructor(private _http: HttpClient) {}

  getListMedicalHistory() {
    //http://localhost:8008/api/v1/laboratory/1
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/medical_history/patient/list/all/` +
        localStorage.getItem("userId"),
      {
        headers: reqHeader,
      }
    );
  }
}
